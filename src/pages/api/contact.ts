import { Resend } from 'resend';
import { z } from 'zod';
import type { APIRoute } from 'astro';

export const prerender = false;

const WINDOW_MS = 60 * 60 * 1000;
const REQUEST_LIMIT = 5;
const MAX_BODY_SIZE = 16_384;
const rateLimitBuckets = new Map<string, { count: number; expiresAt: number }>();

const contactSchema = z.object({
  name: z.string().trim().min(2).max(100).transform(sanitize),
  email: z.string().trim().pipe(z.email().max(254)),
  organization: z.string().trim().max(120).optional().transform((value) => sanitize(value ?? '')),
  message: z.string().trim().min(20).max(4000).transform(sanitize),
  website: z.string().max(200).optional().default(''),
  locale: z.enum(['en', 'es']).default('en'),
});

type Locale = 'en' | 'es';
type ResponseCode = 'sent' | 'invalid' | 'limited' | 'unavailable' | 'failed';

const messages: Record<Locale, Record<ResponseCode, string> & { title: string; back: string }> = {
  en: {
    title: 'Thanks for reaching out.',
    back: 'Return to it’s football',
    sent: 'Thanks for getting in touch. Your enquiry has been sent.',
    invalid: 'Please check the form and provide a valid email and message.',
    limited: 'Too many requests. Please wait a little before trying again.',
    unavailable: 'The contact service is temporarily unavailable. Please try again later.',
    failed: 'We could not send your enquiry. Please try again later.',
  },
  es: {
    title: 'Gracias por escribirnos.',
    back: 'Volver a it’s football',
    sent: 'Gracias por escribirnos. Hemos recibido tu consulta.',
    invalid: 'Revisa el formulario e introduce un correo y un mensaje válidos.',
    limited: 'Hay demasiadas solicitudes. Espera un momento antes de volver a intentarlo.',
    unavailable: 'El servicio de contacto no está disponible temporalmente. Vuelve a intentarlo más tarde.',
    failed: 'No hemos podido enviar tu consulta. Vuelve a intentarlo más tarde.',
  },
};

function sanitize(value: string): string {
  return value.replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/g, '').trim();
}

function responseFor(
  request: Request,
  locale: Locale,
  code: ResponseCode,
  status: number,
  extraHeaders: HeadersInit = {},
): Response {
  const content = messages[locale][code];
  const headers = new Headers(extraHeaders);

  if (request.headers.get('accept')?.includes('application/json')) {
    headers.set('Content-Type', 'application/json; charset=utf-8');
    headers.set('Cache-Control', 'no-store');
    return new Response(JSON.stringify({ ok: code === 'sent', code, message: content }), { status, headers });
  }

  const homePath = locale === 'es' ? '/es/' : '/';
  const title = code === 'sent' ? messages[locale].title : content;
  const html = `<!doctype html><html lang="${locale}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="robots" content="noindex"><title>${title} | it's football</title><style>body{margin:0;min-height:100vh;display:grid;place-items:center;background:#27527f;color:#fff;font:16px/1.6 system-ui,sans-serif}.result{width:min(37rem,calc(100% - 3rem));padding:3rem 0}h1{font-size:clamp(2.5rem,8vw,5rem);line-height:1.02}a{display:inline-block;margin-top:1rem;padding:.75rem 1rem;background:#a6006f;color:#fff;font-weight:700;text-decoration:none}:focus-visible{outline:3px solid #d7ff24;outline-offset:4px}</style></head><body><main class="result"><h1>${title}</h1><p>${content}</p><a href="${homePath}#contact">${messages[locale].back}</a></main></body></html>`;
  headers.set('Content-Type', 'text/html; charset=utf-8');
  headers.set('Cache-Control', 'no-store');
  return new Response(html, { status, headers });
}

function takeRateLimit(ip: string): { allowed: boolean; retryAfter: number } {
  const now = Date.now();
  for (const [key, bucket] of rateLimitBuckets) {
    if (bucket.expiresAt <= now) rateLimitBuckets.delete(key);
  }

  const bucket = rateLimitBuckets.get(ip);
  if (!bucket || bucket.expiresAt <= now) {
    rateLimitBuckets.set(ip, { count: 1, expiresAt: now + WINDOW_MS });
    return { allowed: true, retryAfter: 0 };
  }

  if (bucket.count >= REQUEST_LIMIT) {
    return { allowed: false, retryAfter: Math.max(1, Math.ceil((bucket.expiresAt - now) / 1000)) };
  }

  bucket.count += 1;
  return { allowed: true, retryAfter: 0 };
}

async function readPayload(request: Request): Promise<unknown> {
  const contentLength = Number(request.headers.get('content-length') ?? 0);
  if (contentLength > MAX_BODY_SIZE) throw new Error('body-too-large');

  const contentType = request.headers.get('content-type') ?? '';
  const isJson = contentType.includes('application/json');
  const isForm = contentType.includes('application/x-www-form-urlencoded');
  if (!isJson && !isForm) throw new Error('unsupported-content-type');

  const reader = request.body?.getReader();
  if (!reader) throw new Error('invalid-body');

  const chunks: Uint8Array[] = [];
  let size = 0;
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    size += value.byteLength;
    if (size > MAX_BODY_SIZE) {
      await reader.cancel();
      throw new Error('body-too-large');
    }
    chunks.push(value);
  }

  const bytes = new Uint8Array(size);
  let offset = 0;
  for (const chunk of chunks) {
    bytes.set(chunk, offset);
    offset += chunk.byteLength;
  }

  const body = new TextDecoder('utf-8', { fatal: true }).decode(bytes);
  return isJson ? JSON.parse(body) : Object.fromEntries(new URLSearchParams(body));
}

export const POST: APIRoute = async ({ request, clientAddress }) => {
  let payload: unknown;

  try {
    payload = await readPayload(request);
  } catch (error) {
    const status = error instanceof Error && error.message === 'unsupported-content-type'
      ? 415
      : error instanceof Error && error.message === 'body-too-large'
        ? 413
        : 400;
    return responseFor(request, 'en', 'invalid', status);
  }

  const parsed = contactSchema.safeParse(payload);
  const locale: Locale = parsed.success
    ? parsed.data.locale
    : typeof payload === 'object' && payload !== null && 'locale' in payload && payload.locale === 'es'
      ? 'es'
      : 'en';

  const rate = takeRateLimit(clientAddress || 'unknown');
  if (!rate.allowed) {
    return responseFor(request, locale, 'limited', 429, { 'Retry-After': String(rate.retryAfter) });
  }

  if (!parsed.success) return responseFor(request, locale, 'invalid', 400);
  if (parsed.data.website) return responseFor(request, locale, 'sent', 200);

  const apiKey = process.env.RESEND_API_KEY;
  const contactTo = process.env.CONTACT_TO;
  const sender = process.env.RESEND_FROM;
  if (!apiKey || !contactTo || !sender) {
    return responseFor(request, locale, 'unavailable', 503);
  }

  const resend = new Resend(apiKey);
  const { name, email, organization, message } = parsed.data;
  try {
    const { error } = await resend.emails.send({
      from: sender,
      to: contactTo,
      replyTo: email,
      subject: `New website enquiry from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nOrganisation: ${organization || 'Not provided'}\n\n${message}`,
    });

    if (error) return responseFor(request, locale, 'failed', 502);
  } catch {
    return responseFor(request, locale, 'failed', 502);
  }

  if (process.env.CONTACT_SEND_CONFIRMATION === 'true') {
    const confirmation = locale === 'es'
      ? `Hola ${name},\n\nGracias por escribir a it's football. Hemos recibido tu consulta y nos pondremos en contacto contigo.\n\nEl equipo de it's football`
      : `Hi ${name},\n\nThanks for contacting it's football. We have received your enquiry and will be in touch.\n\nThe it's football team`;
    try {
      await resend.emails.send({
        from: sender,
        to: email,
        subject: locale === 'es' ? 'Hemos recibido tu consulta' : 'We received your enquiry',
        text: confirmation,
      });
    } catch {
      // The team notification succeeded, so confirmation failure must not invalidate the enquiry.
    }
  }

  return responseFor(request, locale, 'sent', 200);
};