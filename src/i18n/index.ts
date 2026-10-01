import en from './en';
import es from './es';

export const dictionaries = { en, es } as const;
export type Locale = keyof typeof dictionaries;
export type MessageKey = keyof typeof en;
type Messages = { [Key in MessageKey]: string };
export type RouteKey = 'home' | 'stages' | 'coaches' | 'matches' | 'tournaments' | 'teams';

const localizedMessages: Record<Locale, Messages> = { en, es };

const routePaths: Record<RouteKey, Record<Locale, string>> = {
  home: { en: '/', es: '/es/' },
  stages: { en: '/stages/', es: '/es/etapas/' },
  coaches: { en: '/coaches/', es: '/es/entrenadores/' },
  matches: { en: '/matches/', es: '/es/partidos/' },
  tournaments: { en: '/tournaments/', es: '/es/torneos/' },
  teams: { en: '/teams/', es: '/es/equipos/' },
};

export function t(locale: Locale, key: MessageKey): string {
  return localizedMessages[locale][key];
}

export function getLocalizedPath(route: RouteKey, locale: Locale): string {
  return routePaths[route][locale];
}

export function getRouteKey(pathname: string, locale: Locale): RouteKey {
  const normalizedPath = pathname.endsWith('/') ? pathname : `${pathname}/`;
  const match = (Object.keys(routePaths) as RouteKey[]).find(
    (route) => routePaths[route][locale] === normalizedPath,
  );

  return match ?? 'home';
}