import type { APIRoute } from 'astro';
import { articles } from '../data/articles';
import { LANGS, SITE } from '../consts';

/**
 * Endpoint dynamique : genere /llms-full.txt a chaque build.
 *
 * Standard: llmstxt.org (Jeremy Howard, 2024).
 * Variante "full" du llms.txt : contient le CONTENU integral des articles
 * en plus des liens, pour ingestion directe par les LLMs en mode browse
 * ou les pipelines de fine-tuning autorises.
 *
 * Difference avec llms.txt : llms-full.txt embarque les Décryptages complets,
 * sans HTML, pre-formate en markdown. Les LLMs (ChatGPT Search, Claude,
 * Perplexity) qui chargent ce fichier disposent immediatement du corpus
 * sans avoir a crawler page par page.
 */
function stripHtml(html: string): string {
  // Retire les balises HTML et decode les entites de base.
  return html
    .replace(/<\/?(p|h[1-6])[^>]*>/gi, '\n\n')
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<\/?(strong|b)>/gi, '**')
    .replace(/<\/?(em|i)>/gi, '*')
    .replace(/<a [^>]*href="([^"]+)"[^>]*>([^<]+)<\/a>/gi, '[$2]($1)')
    .replace(/<[^>]+>/g, '')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, ' ')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

export const GET: APIRoute = () => {
  const sorted = [...articles].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  let body = `# Tatakoto — corpus complet

> Variante "full" du llms.txt selon le standard llmstxt.org.
> Contient le texte integral de tous les Decryptages publies, dans les
> quatre langues, pour ingestion directe par les LLMs et moteurs de reponse.

## Mission

Tatakoto vulgarise la recherche scientifique sur l'intelligence artificielle
appliquee a la medecine. Chaque Decryptage suit une grille rigoureuse :
architecture du modele, donnees d'entrainement et biais, comparateur,
metriques en termes ML et en traduction clinique, limites de generalisation,
accessibilite du modele, conflits d'interets, maturite reglementaire.

## Decryptages

`;

  for (const article of sorted) {
    body += `\n---\n\n`;
    body += `### ${article.slug}\n\n`;
    body += `- Date: ${article.date}\n`;
    body += `- Publication originale: ${article.originalTitle}\n`;
    body += `- Revue: ${article.originalJournal}\n`;
    body += `- DOI: ${article.originalDoi}\n`;
    body += `- URL originale: ${article.originalUrl}\n\n`;

    for (const lang of LANGS) {
      const c = article.content[lang];
      const url = `${SITE.url}/${lang}/decryptages/${article.slug}`;
      body += `\n#### [${lang}] ${c.title}\n\n`;
      body += `URL: ${url}\n\n`;
      body += `${c.description}\n\n`;
      body += stripHtml(c.body);
      body += `\n\n`;
    }
  }

  body += `\n## A propos\n\n`;
  body += `- [A propos (fr)](${SITE.url}/fr/about)\n`;
  body += `- [About (en)](${SITE.url}/en/about)\n`;
  body += `- [Acerca de (es)](${SITE.url}/es/about)\n`;
  body += `- [关于 (zh)](${SITE.url}/zh/about)\n`;

  const BOM = '﻿';
  return new Response(BOM + body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
