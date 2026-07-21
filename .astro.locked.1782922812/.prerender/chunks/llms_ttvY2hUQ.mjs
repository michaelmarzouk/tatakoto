import { a as articles } from './articles_CCqo92gc.mjs';
import { L as LANGS, S as SITE } from './consts_Bjadhjos.mjs';

const GET = () => {
  const sorted = [...articles].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  let body = `# Tatakoto

> Tatakoto vulgarise la recherche scientifique sur l'intelligence artificielle
> appliquee a la medecine. Detection de cancer par modeles transformer,
> foundation models en imagerie medicale, LLMs en raisonnement clinique,
> IA en decouverte de medicaments. Chaque article dit ce que l'etude trouve,
> ce qu'elle ne dit pas, et ce qui change.

## Mission

Tatakoto rend la recherche IA-sante lisible, verifiable et utile a un public
non specialiste. Methode editoriale rigoureuse : architecture du modele,
donnees d'entrainement et biais, comparateur honnete, metriques en termes ML
ET en traduction clinique, limites de generalisation, accessibilite du modele,
conflits d'interets. Modes d'echec specifiques signales : data leakage,
shortcut learning, biais de population.

## Langues

Articles publies en francais (original), anglais, espagnol, chinois.

## Decryptages

`;
  for (const article of sorted) {
    for (const lang of LANGS) {
      const c = article.content[lang];
      const url = `${SITE.url}/${lang}/decryptages/${article.slug}`;
      body += `- [${c.title} (${lang})](${url})
`;
    }
    body += "\n";
  }
  body += `## A propos

- [A propos (fr)](${SITE.url}/fr/about)
- [About (en)](${SITE.url}/en/about)
- [Acerca de (es)](${SITE.url}/es/about)
- [关于 (zh)](${SITE.url}/zh/about)
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
