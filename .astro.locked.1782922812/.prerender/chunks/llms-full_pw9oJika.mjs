import { a as articles } from './articles_D17YHRcf.mjs';
import { L as LANGS, S as SITE } from './consts_Bjadhjos.mjs';

function stripHtml(html) {
  return html.replace(/<\/?(p|h[1-6])[^>]*>/gi, "\n\n").replace(/<br\s*\/?>/gi, "\n").replace(/<\/?(strong|b)>/gi, "**").replace(/<\/?(em|i)>/gi, "*").replace(/<a [^>]*href="([^"]+)"[^>]*>([^<]+)<\/a>/gi, "[$2]($1)").replace(/<[^>]+>/g, "").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&nbsp;/g, " ").replace(/\n{3,}/g, "\n\n").trim();
}
const GET = () => {
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
    body += `
---

`;
    body += `### ${article.slug}

`;
    body += `- Date: ${article.date}
`;
    body += `- Publication originale: ${article.originalTitle}
`;
    body += `- Revue: ${article.originalJournal}
`;
    body += `- DOI: ${article.originalDoi}
`;
    body += `- URL originale: ${article.originalUrl}

`;
    for (const lang of LANGS) {
      const c = article.content[lang];
      const url = `${SITE.url}/${lang}/decryptages/${article.slug}`;
      body += `
#### [${lang}] ${c.title}

`;
      body += `URL: ${url}

`;
      body += `${c.description}

`;
      body += stripHtml(c.body);
      body += `

`;
    }
  }
  body += `
## A propos

`;
  body += `- [A propos (fr)](${SITE.url}/fr/about)
`;
  body += `- [About (en)](${SITE.url}/en/about)
`;
  body += `- [Acerca de (es)](${SITE.url}/es/about)
`;
  body += `- [关于 (zh)](${SITE.url}/zh/about)
`;
  const BOM = "\uFEFF";
  return new Response(BOM + body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" }
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
