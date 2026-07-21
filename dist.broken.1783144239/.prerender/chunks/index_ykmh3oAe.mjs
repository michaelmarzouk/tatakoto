import { c as createComponent } from './astro-component_jIzWlOws.mjs';
import 'piccolore';
import { r as renderComponent, g as renderTemplate, c as maybeRenderHead } from './prerender_B4PWL2FF.mjs';
import { L as LANGS } from './consts_Bjadhjos.mjs';
import { $ as $$BaseLayout, R as ROUTES } from './BaseLayout_uLLR0r4g.mjs';
import { a as articles } from './articles_CCqo92gc.mjs';
import { $ as $$ArticleCard } from './ArticleCard_4FvsDXHE.mjs';

const getStaticPaths = (() => {
  return LANGS.map((lang) => ({ params: { lang } }));
});
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Index;
  const { lang } = Astro2.params;
  const translations = {
    fr: ROUTES.fr.decryptages,
    en: ROUTES.en.decryptages,
    es: ROUTES.es.decryptages,
    zh: ROUTES.zh.decryptages
  };
  const sortedArticles = [...articles].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  const titleMap = { fr: "Décryptages", en: "Decryptions", es: "Análisis", zh: "解读" };
  const descMap = {
    fr: "Tous les décryptages de publications scientifiques sur Tatakoto.",
    en: "All scientific publication decryptions on Tatakoto.",
    es: "Todos los análisis de publicaciones científicas en Tatakoto.",
    zh: "Tatakoto上所有科学出版物的解读。"
  };
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "lang": lang, "title": titleMap[lang], "description": descMap[lang], "translations": translations, "data-astro-cid-xhsboxvo": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="container list-section" data-astro-cid-xhsboxvo> <div class="label-meta" data-astro-cid-xhsboxvo>${titleMap[lang]}</div> <h1 class="list-title" data-astro-cid-xhsboxvo>${titleMap[lang]}</h1> <p class="list-desc" data-astro-cid-xhsboxvo>${descMap[lang]}</p> <div class="list-grid" data-astro-cid-xhsboxvo> ${sortedArticles.map((article) => renderTemplate`${renderComponent($$result2, "ArticleCard", $$ArticleCard, { "lang": lang, "href": `${ROUTES[lang].decryptages}/${article.slug}`, "title": article.content[lang].title, "description": article.content[lang].description, "date": article.date, "readTime": article.readTime, "tags": article.tags, "data-astro-cid-xhsboxvo": true })}`)} </div> </section> ` })}`;
}, "/sessions/pensive-inspiring-faraday/mnt/Tatakoto/repo/src/pages/[lang]/decryptages/index.astro", void 0);

const $$file = "/sessions/pensive-inspiring-faraday/mnt/Tatakoto/repo/src/pages/[lang]/decryptages/index.astro";
const $$url = "/[lang]/decryptages";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
