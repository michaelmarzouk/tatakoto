import { c as createComponent } from './astro-component_jIzWlOws.mjs';
import 'piccolore';
import { c as maybeRenderHead, a as addAttribute, g as renderTemplate } from './prerender_B4PWL2FF.mjs';
import 'clsx';
import { t } from './BaseLayout_uLLR0r4g.mjs';

const $$ArticleCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$ArticleCard;
  const { lang, href, title, description, date, readTime, tags = [] } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")} class="card unstyled" data-astro-cid-di2nlc57> <div class="card-meta" data-astro-cid-di2nlc57> <span class="label-meta" data-astro-cid-di2nlc57>${new Date(date).toLocaleDateString(lang, { day: "numeric", month: "long", year: "numeric" })}</span> ${readTime && renderTemplate`<span class="card-read" data-astro-cid-di2nlc57> · ${readTime} ${t(lang, "article.minutes")}</span>`} </div> <h3 class="card-title" data-astro-cid-di2nlc57>${title}</h3> <p class="card-desc" data-astro-cid-di2nlc57>${description}</p> <div class="card-tags" data-astro-cid-di2nlc57> ${tags.includes("medical") && renderTemplate`<span class="tag tag-medical" data-astro-cid-di2nlc57>médical</span>`} ${tags.includes("ai") && renderTemplate`<span class="tag tag-ai" data-astro-cid-di2nlc57>IA</span>`} <span class="card-read-more" data-astro-cid-di2nlc57>${t(lang, "home.read_more")} →</span> </div> </a>`;
}, "/sessions/pensive-inspiring-faraday/mnt/Tatakoto/repo/src/components/ArticleCard.astro", void 0);

export { $$ArticleCard as $ };
