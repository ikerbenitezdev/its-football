import node from '@astrojs/node';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';
import { getLocalizedPath } from './src/i18n/index.ts';

const routeKeys = ['home', 'stages', 'coaches', 'matches', 'tournaments', 'teams'];
const contentLastModified = new Date('2026-10-01T00:00:00.000Z');

export default defineConfig({
  site: process.env.SITE_URL || 'https://itsfootball.example',
  output: 'static',
  trailingSlash: 'always',
  adapter: node({ mode: 'standalone' }),
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en-US',
          es: 'es-ES',
        },
      },
      lastmod: contentLastModified,
      serialize(item) {
        const url = new URL(item.url);
        const route = routeKeys.find((key) =>
          [getLocalizedPath(key, 'en'), getLocalizedPath(key, 'es')].includes(url.pathname),
        );
        if (!route) return item;

        return {
          ...item,
          links: [
            { lang: 'en-US', url: new URL(getLocalizedPath(route, 'en'), url.origin).href },
            { lang: 'es-ES', url: new URL(getLocalizedPath(route, 'es'), url.origin).href },
            { lang: 'x-default', url: new URL(getLocalizedPath(route, 'en'), url.origin).href },
          ],
        };
      },
    }),
  ],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  image: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  vite: {
    plugins: [tailwindcss()],
  },
  build: {
    inlineStylesheets: 'auto',
  },
});