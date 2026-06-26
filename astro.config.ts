import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { articles } from './src/data/articles';

// Map slug -> date pour donner un lastmod precis sur chaque Decryptage.
const ARTICLE_DATES: Record<string, string> = Object.fromEntries(
  articles.map((a) => [a.slug, a.updated || a.date])
);

const BUILD_DATE = new Date().toISOString();

export default defineConfig({
  site: 'https://www.tatakoto.com',
  trailingSlash: 'never',
  build: { format: 'directory' },
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'en', 'es', 'zh'],
    routing: { prefixDefaultLocale: true, redirectToDefaultLocale: false },
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'fr',
        locales: { fr: 'fr-FR', en: 'en-US', es: 'es-ES', zh: 'zh-CN' },
      },
      // Defauts (override par serialize() ci-dessous selon le type de page)
      changefreq: 'weekly',
      priority: 0.6,
      lastmod: new Date(),
      filter: (page) => {
        // Exclut llms.txt, llms-full.txt et autres endpoints non-HTML eventuels
        return !page.endsWith('.txt');
      },
      serialize(item) {
        const url = item.url;

        // Page d'accueil par langue : priorite max, mise a jour quotidienne
        if (/^https:\/\/www\.tatakoto\.com\/(fr|en|es|zh)\/?$/.test(url)) {
          item.priority = 1.0;
          item.changefreq = 'daily';
          item.lastmod = BUILD_DATE;
          return item;
        }

        // Index des decryptages par langue : haute priorite, frequent
        if (/\/decryptages\/?$/.test(url)) {
          item.priority = 0.8;
          item.changefreq = 'daily';
          item.lastmod = BUILD_DATE;
          return item;
        }

        // Articles : priorite forte, lastmod = date de l'article
        const articleMatch = url.match(/\/decryptages\/([^/]+)\/?$/);
        if (articleMatch && ARTICLE_DATES[articleMatch[1]]) {
          item.priority = 0.9;
          item.changefreq = 'monthly';
          item.lastmod = new Date(ARTICLE_DATES[articleMatch[1]]).toISOString();
          return item;
        }

        // Pages a propos : priorite modeste, rarement mises a jour
        if (/\/about\/?$/.test(url)) {
          item.priority = 0.4;
          item.changefreq = 'monthly';
          item.lastmod = BUILD_DATE;
          return item;
        }

        // Defaut pour les autres pages
        item.lastmod = BUILD_DATE;
        return item;
      },
    }),
  ],
});
