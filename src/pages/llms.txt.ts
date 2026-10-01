import type { APIRoute } from 'astro';
import { getLocalizedPath } from '../i18n';

export const prerender = true;

export const GET: APIRoute = ({ site }) => {
  const baseUrl = site ?? new URL('https://itsfootball.example');
  const url = (path: string) => new URL(path, baseUrl).href;
  const englishHome = url(getLocalizedPath('home', 'en'));
  const spanishHome = url(getLocalizedPath('home', 'es'));
  const englishServices = [
    ['Football stages', 'stages', 'International training experiences for players and groups.'],
    ['Coach development', 'coaches', 'Practical football learning and exchange for coaches.'],
    ['International matches', 'matches', 'Competitive fixtures for clubs and teams, confirmed individually.'],
    ['Football tournaments', 'tournaments', 'Tournament opportunities, subject to event details and availability.'],
    ['Team experiences', 'teams', 'International football trips shaped around a club’s goals and group.'],
  ] as const;
  const spanishServices = [
    ['Stages de fútbol', 'stages', 'Experiencias internacionales de entrenamiento para jugadores y grupos.'],
    ['Formación de entrenadores', 'coaches', 'Aprendizaje práctico e intercambio futbolístico para entrenadores.'],
    ['Partidos internacionales', 'matches', 'Encuentros para clubes y equipos, sujetos a confirmación individual.'],
    ['Torneos de fútbol', 'tournaments', 'Oportunidades sujetas a los detalles y la disponibilidad del evento.'],
    ['Experiencias para equipos', 'teams', 'Viajes internacionales según los objetivos del club y del grupo.'],
  ] as const;
  const body = [
    '# it’s football',
    '',
    '> International football development for players, coaches, teams and clubs through stages, coach development, matches, tournaments and tailored team experiences.',
    '',
    'it’s football creates football learning and competition experiences in international settings. Programme dates, venues, participants, inclusions and availability are confirmed individually. This website does not publish an unverified event calendar or performance statistics.',
    '',
    '## English',
    '',
    `- [Home](${englishHome}): International football development.`,
    ...englishServices.map(([label, route, summary]) => `- [${label}](${url(getLocalizedPath(route, 'en'))}): ${summary}`),
    '',
    '## Español',
    '',
    `- [Inicio](${spanishHome}): Formación futbolística internacional.`,
    ...spanishServices.map(([label, route, summary]) => `- [${label}](${url(getLocalizedPath(route, 'es'))}): ${summary}`),
    '',
    '## Contact',
    '',
    `- [Contact form](${englishHome}#contact): Enquiries about programmes and team experiences.`,
    `- [Formulario de contacto](${spanishHome}#contact): Consultas sobre programas y experiencias para equipos.`,
    '',
  ].join('\n');

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};