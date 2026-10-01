# SEO and GEO Launch Checklist

## Automated Checks

- [x] English and Spanish pages are prerendered as static HTML.
- [x] Service routes use translated slugs and one shared content template.
- [x] Each service page has one H1, a 40-60 word answer-first introduction, contextual links, visible breadcrumbs and three FAQs.
- [x] Service and FAQ JSON-LD is rendered into the HTML.
- [x] The catch-all 404 returns status 404, selects Spanish for `/es/` paths and is marked `noindex`.
- [x] `robots.txt` and `llms.txt` are generated at build time from Astro's configured site URL.
- [x] The sitemap is configured with locale alternates and `lastmod`.
- [ ] After changing page content, update `contentLastModified` in `astro.config.mjs` before building.

## Coolify Before Launch

- [ ] Set `SITE_URL` to the canonical HTTPS origin, without a path, before `npm run build`.
- [ ] Set `HOST=0.0.0.0` and `PORT=4321`; expose internal port `4321` in Coolify.
- [ ] Set `RESEND_API_KEY`, `CONTACT_TO` and `RESEND_FROM` in Coolify secrets/environment. Verify the sender domain in Resend.
- [ ] Enable `CONTACT_SEND_CONFIRMATION=true` only if lead confirmation mail is wanted.
- [ ] Configure edge response headers in the Coolify proxy, and enable HSTS only after HTTPS is active:
  - `Strict-Transport-Security: max-age=31536000; includeSubDomains`
  - `Referrer-Policy: strict-origin-when-cross-origin`
  - `X-Content-Type-Options: nosniff`
  - `X-Frame-Options: DENY`
  - `Content-Security-Policy: default-src 'self'; base-uri 'self'; object-src 'none'; frame-ancestors 'none'; form-action 'self'; img-src 'self' data:; font-src 'self'; connect-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'`
- [ ] Set immutable one-year caching for fingerprinted `/_astro/*` assets; keep HTML revalidated and `/api/contact` `no-store`.

## Post-Deploy Verification

- [ ] Open `/`, `/es/` and all ten service URLs; verify status 200 and the correct language.
- [ ] Check `/robots.txt`, `/llms.txt`, `/sitemap-index.xml` and each sitemap entry against the live canonical host.
- [ ] Verify reciprocal `en`, `es` and `x-default` alternates in page HTML and sitemap XML. Check each canonical is self-referencing.
- [ ] Submit the homepage and service URLs to Lighthouse/PageSpeed Insights on mobile. Check LCP, CLS and INP with real-user data when available.
- [ ] Validate JSON-LD with Schema.org Validator and Google Rich Results Test. Search engines decide which rich results to display.
- [ ] Submit the sitemap in Google Search Console and Bing Webmaster Tools, then review crawl and indexing reports.
- [ ] Send one real test enquiry after configuring Resend and verify the team notification, reply-to address and optional confirmation.

## Verified Brand Facts Still Needed

Do not publish guessed entity details. Add these consistently to the website and `SportsOrganization` schema once confirmed:

- [ ] Official foundation year, legal/brand description and operating locations.
- [ ] Official social/profile URLs for `sameAs`.
- [ ] Coach names, biographies, roles and credentials before adding `Person` schema.
- [ ] Confirmed event dates, venues and organizers before adding `SportsEvent` records.
- [ ] Approved company contact email, phone and postal address, if intended for public display.
