import { c as createComponent } from './astro-component_jIzWlOws.mjs';
import 'piccolore';
import { r as renderComponent, g as renderTemplate, c as maybeRenderHead, F as Fragment, u as unescapeHTML, a as addAttribute } from './prerender_B4PWL2FF.mjs';
import { S as SITE, a as LANG_LOCALES, L as LANGS } from './consts_Bjadhjos.mjs';
import { a as articles } from './articles_CCqo92gc.mjs';
import { R as ROUTES, $ as $$BaseLayout, t } from './BaseLayout_uLLR0r4g.mjs';

const $$ArticleLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$ArticleLayout;
  const { lang, article } = Astro2.props;
  const content = article.content[lang];
  const translations = {
    fr: `${ROUTES.fr.decryptages}/${article.slug}`,
    en: `${ROUTES.en.decryptages}/${article.slug}`,
    es: `${ROUTES.es.decryptages}/${article.slug}`,
    zh: `${ROUTES.zh.decryptages}/${article.slug}`
  };
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalScholarlyArticle",
    headline: content.title,
    description: content.description,
    datePublished: article.date,
    dateModified: article.updated,
    inLanguage: LANG_LOCALES[lang],
    author: {
      "@type": "Organization",
      name: SITE.name,
      url: SITE.url
    },
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      url: SITE.url,
      logo: { "@type": "ImageObject", url: `${SITE.url}/favicon/android-512.png` }
    },
    citation: {
      "@type": "MedicalScholarlyArticle",
      headline: article.originalTitle,
      url: article.originalUrl,
      identifier: article.originalDoi,
      publisher: { "@type": "Organization", name: article.originalJournal }
    },
    about: [
      ...(article.drugs ?? []).map((d) => ({
        "@type": "Drug",
        name: d.name,
        ...d.sameAs ? { sameAs: d.sameAs } : {}
      })),
      ...(article.conditions ?? []).map((c) => ({
        "@type": "MedicalCondition",
        name: c.name,
        ...c.sameAs ? { sameAs: c.sameAs } : {}
      }))
    ],
    audience: { "@type": "MedicalAudience", audienceType: "Patient" },
    isAccessibleForFree: true,
    mainEntityOfPage: { "@type": "WebPage", "@id": new URL(Astro2.url.pathname, SITE.url).toString() }
  };
  const formattedDate = new Date(article.date).toLocaleDateString(lang, {
    day: "numeric",
    month: "long",
    year: "numeric"
  });
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "lang": lang, "title": content.title, "description": content.description, "translations": translations, "jsonLd": [JSON.stringify(articleSchema)], "data-astro-cid-zm77yjld": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<article class="prose article-body" data-astro-cid-zm77yjld> <header class="article-header" data-astro-cid-zm77yjld> <div class="article-tags" data-astro-cid-zm77yjld> ${article.tags.includes("medical") && renderTemplate`<span class="tag tag-medical" data-astro-cid-zm77yjld>médical</span>`} ${article.tags.includes("ai") && renderTemplate`<span class="tag tag-ai" data-astro-cid-zm77yjld>IA</span>`} </div> <h1 data-astro-cid-zm77yjld>${content.title}</h1> <div class="article-meta" data-astro-cid-zm77yjld> <span data-astro-cid-zm77yjld>${t(lang, "article.published")} ${formattedDate}</span> <span class="dot" data-astro-cid-zm77yjld>·</span> <span data-astro-cid-zm77yjld>${article.readTime} ${t(lang, "article.minutes")} ${t(lang, "article.read_time")}</span> </div> </header> ${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML(content.body)}` })} <hr data-astro-cid-zm77yjld> <aside class="article-source" data-astro-cid-zm77yjld> <div class="label-meta" data-astro-cid-zm77yjld>${t(lang, "article.original")}</div> <a${addAttribute(article.originalUrl, "href")} target="_blank" rel="noopener noreferrer" data-astro-cid-zm77yjld> ${article.originalTitle} </a> <div class="article-source-meta" data-astro-cid-zm77yjld> <em data-astro-cid-zm77yjld>${article.originalJournal}</em> · DOI: <code data-astro-cid-zm77yjld>${article.originalDoi}</code> </div> </aside> </article> ` })}`;
}, "/sessions/pensive-inspiring-faraday/mnt/Tatakoto/repo/src/layouts/ArticleLayout.astro", void 0);

const getStaticPaths = (() => {
  const paths = [];
  for (const lang of LANGS) {
    for (const article of articles) {
      paths.push({ params: { lang, slug: article.slug }, props: { article } });
    }
  }
  return paths;
});
const $$slug = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$slug;
  const { lang } = Astro2.params;
  const { article } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "ArticleLayout", $$ArticleLayout, { "lang": lang, "article": article })}`;
}, "/sessions/pensive-inspiring-faraday/mnt/Tatakoto/repo/src/pages/[lang]/decryptages/[slug].astro", void 0);

const $$file = "/sessions/pensive-inspiring-faraday/mnt/Tatakoto/repo/src/pages/[lang]/decryptages/[slug].astro";
const $$url = "/[lang]/decryptages/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
