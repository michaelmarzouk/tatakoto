import { c as createComponent } from './astro-component_C6R-pZ6P.mjs';
import 'piccolore';
import { r as renderComponent, g as renderTemplate, c as maybeRenderHead } from './prerender_f07zrkq6.mjs';
import { L as LANGS } from './consts_Bjadhjos.mjs';
import { t, $ as $$BaseLayout, R as ROUTES } from './BaseLayout_daOfS54_.mjs';
import { a as articles } from './articles_D17YHRcf.mjs';
import { $ as $$ArticleCard } from './ArticleCard_SNfVWJDm.mjs';

const getStaticPaths = (() => {
  return LANGS.map((lang) => ({ params: { lang } }));
});
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Index;
  const { lang } = Astro2.params;
  const translations = {
    fr: "/fr",
    en: "/en",
    es: "/es",
    zh: "/zh"
  };
  const sortedArticles = [...articles].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "lang": lang, "title": "Tatakoto", "description": t(lang, "home.intro_body"), "translations": translations, "data-astro-cid-ct3bgug4": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="hero" data-astro-cid-ct3bgug4> <div class="container" data-astro-cid-ct3bgug4> <div class="hero-grid" data-astro-cid-ct3bgug4> <div class="hero-icon" data-astro-cid-ct3bgug4> <svg viewBox="0 0 200 200" width="160" height="160" aria-hidden="true" data-astro-cid-ct3bgug4> <circle cx="100" cy="100" r="100" fill="#0F1F3D" data-astro-cid-ct3bgug4></circle> <g shape-rendering="crispEdges" data-astro-cid-ct3bgug4> <line x1="30" y1="120" x2="170" y2="120" stroke="#1F3D6A" stroke-width="1" opacity="0.55" data-astro-cid-ct3bgug4></line> <line x1="50" y1="100" x2="150" y2="100" stroke="#1F3D6A" stroke-width="1" opacity="0.3" data-astro-cid-ct3bgug4></line> <line x1="50" y1="140" x2="150" y2="140" stroke="#1F3D6A" stroke-width="1" opacity="0.3" data-astro-cid-ct3bgug4></line> </g> <polyline points="20,120 80,120 90,125 95,100 100,65 105,100 110,120 115,145 120,160 125,120 180,120" fill="none" stroke="#FF6B6B" stroke-width="3.5" shape-rendering="crispEdges" stroke-linecap="square" stroke-linejoin="miter" data-astro-cid-ct3bgug4></polyline> <g shape-rendering="crispEdges" fill="#4ECDC4" data-astro-cid-ct3bgug4> <rect x="99" y="28" width="3" height="3" data-astro-cid-ct3bgug4></rect> <rect x="96" y="31" width="9" height="3" data-astro-cid-ct3bgug4></rect> <rect x="93" y="34" width="15" height="3" data-astro-cid-ct3bgug4></rect> <rect x="90" y="37" width="21" height="3" data-astro-cid-ct3bgug4></rect> <rect x="93" y="40" width="15" height="3" data-astro-cid-ct3bgug4></rect> <rect x="96" y="43" width="9" height="3" data-astro-cid-ct3bgug4></rect> <rect x="99" y="46" width="3" height="3" data-astro-cid-ct3bgug4></rect> <rect x="140" y="18" width="2" height="2" data-astro-cid-ct3bgug4></rect> <rect x="138" y="20" width="6" height="2" data-astro-cid-ct3bgug4></rect> <rect x="140" y="22" width="2" height="2" data-astro-cid-ct3bgug4></rect> <rect x="62" y="48" width="2" height="2" data-astro-cid-ct3bgug4></rect> <rect x="60" y="50" width="6" height="2" data-astro-cid-ct3bgug4></rect> <rect x="62" y="52" width="2" height="2" data-astro-cid-ct3bgug4></rect> </g> </svg> </div> <div class="hero-text" data-astro-cid-ct3bgug4> <h1 class="hero-title" data-astro-cid-ct3bgug4>${t(lang, "home.intro_title")}</h1> <p class="hero-intro" data-astro-cid-ct3bgug4>${t(lang, "home.intro_body")}</p> <div class="hero-tagline" data-astro-cid-ct3bgug4>// ${t(lang, "home.tagline")}</div> </div> </div> </div> </section> <section class="latest" data-astro-cid-ct3bgug4> <div class="container" data-astro-cid-ct3bgug4> <div class="latest-head" data-astro-cid-ct3bgug4> <div class="label-meta" data-astro-cid-ct3bgug4>${t(lang, "home.latest")}</div> </div> <div class="latest-grid" data-astro-cid-ct3bgug4> ${sortedArticles.map((article) => renderTemplate`${renderComponent($$result2, "ArticleCard", $$ArticleCard, { "lang": lang, "href": `${ROUTES[lang].decryptages}/${article.slug}`, "title": article.content[lang].title, "description": article.content[lang].description, "date": article.date, "readTime": article.readTime, "tags": article.tags, "data-astro-cid-ct3bgug4": true })}`)} </div> </div> </section> ` })}`;
}, "/sessions/trusting-quirky-newton/mnt/Tatakoto/repo/src/pages/[lang]/index.astro", void 0);

const $$file = "/sessions/trusting-quirky-newton/mnt/Tatakoto/repo/src/pages/[lang]/index.astro";
const $$url = "/[lang]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
