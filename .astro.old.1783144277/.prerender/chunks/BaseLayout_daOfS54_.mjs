import { c as createComponent } from './astro-component_C6R-pZ6P.mjs';
import 'piccolore';
import { c as maybeRenderHead, a as addAttribute, g as renderTemplate, r as renderComponent, f as renderSlot, e as renderHead, d as defineScriptVars, u as unescapeHTML } from './prerender_f07zrkq6.mjs';
import { L as LANGS, S as SITE, a as LANG_LOCALES } from './consts_Bjadhjos.mjs';
import 'clsx';

const ui = {
  fr: {
    "nav.home": "Accueil",
    "nav.decryptages": "Décryptages",
    "nav.about": "À propos",
    "nav.method": "Méthode",
    "home.tagline": "l'IA en médecine, décryptée.",
    "home.intro_title": "Lire la recherche IA × médecine, mieux.",
    "home.intro_body": "Tatakoto décrypte les publications scientifiques sur l'intelligence artificielle appliquée à la santé. Transformer pour la détection de cancer, foundation models en imagerie médicale, LLMs en raisonnement clinique. Chaque article dit ce que l'étude trouve, ce qu'elle ne dit pas, et ce qui change.",
    "home.latest": "Derniers décryptages",
    "home.read_more": "Lire l'article",
    "article.published": "Publié le",
    "article.updated": "Mis à jour le",
    "article.by": "par",
    "article.read_time": "lecture",
    "article.minutes": "min",
    "article.original": "Publication originale",
    "article.ai_note": "Article rédigé et signé par un humain. La traduction vers les autres langues est assistée par IA puis relue par un locuteur natif.",
    "footer.editorial": "Ligne éditoriale",
    "footer.about": "À propos",
    "footer.contact": "Contact"
  },
  en: {
    "nav.home": "Home",
    "nav.decryptages": "Decryptions",
    "nav.about": "About",
    "nav.method": "Method",
    "home.tagline": "AI in medicine, decrypted.",
    "home.intro_title": "Read AI × medicine research, better.",
    "home.intro_body": "Tatakoto decodes scientific publications on artificial intelligence applied to health. Transformers for cancer detection, foundation models in medical imaging, LLMs in clinical reasoning. Each article tells what the study found, what it doesn't say, and what changes.",
    "home.latest": "Latest decryptions",
    "home.read_more": "Read article",
    "article.published": "Published on",
    "article.updated": "Updated on",
    "article.by": "by",
    "article.read_time": "read",
    "article.minutes": "min",
    "article.original": "Original publication",
    "article.ai_note": "Article written and signed by a human. Translation to other languages is AI-assisted then reviewed by a native speaker.",
    "footer.editorial": "Editorial guidelines",
    "footer.about": "About",
    "footer.contact": "Contact"
  },
  es: {
    "nav.home": "Inicio",
    "nav.decryptages": "Análisis",
    "nav.about": "Acerca de",
    "nav.method": "Método",
    "home.tagline": "la IA en medicina, descifrada.",
    "home.intro_title": "Leer la investigación IA × medicina, mejor.",
    "home.intro_body": "Tatakoto analiza las publicaciones científicas sobre inteligencia artificial aplicada a la salud. Transformers para detección de cáncer, foundation models en imagen médica, LLMs en razonamiento clínico. Cada artículo dice lo que el estudio encuentra, lo que no dice, y lo que cambia.",
    "home.latest": "Últimos análisis",
    "home.read_more": "Leer artículo",
    "article.published": "Publicado el",
    "article.updated": "Actualizado el",
    "article.by": "por",
    "article.read_time": "lectura",
    "article.minutes": "min",
    "article.original": "Publicación original",
    "article.ai_note": "Artículo escrito y firmado por un humano. La traducción a otros idiomas es asistida por IA y luego revisada por un hablante nativo.",
    "footer.editorial": "Línea editorial",
    "footer.about": "Acerca de",
    "footer.contact": "Contacto"
  },
  zh: {
    "nav.home": "首页",
    "nav.decryptages": "解读",
    "nav.about": "关于",
    "nav.method": "方法",
    "home.tagline": "解读医疗AI研究。",
    "home.intro_title": "更好地阅读AI × 医学研究。",
    "home.intro_body": "Tatakoto解读应用于健康领域的人工智能科学出版物。用于癌症检测的Transformer、医学影像基础模型、临床推理中的大语言模型。每篇文章都讲述研究发现了什么、没有说什么、以及会改变什么。",
    "home.latest": "最新解读",
    "home.read_more": "阅读文章",
    "article.published": "发布于",
    "article.updated": "更新于",
    "article.by": "作者",
    "article.read_time": "阅读",
    "article.minutes": "分钟",
    "article.original": "原始出版物",
    "article.ai_note": "本文由人类撰写并签名。翻译至其他语言由AI辅助完成，并经母语者审核。",
    "footer.editorial": "编辑准则",
    "footer.about": "关于",
    "footer.contact": "联系"
  }
};
const ROUTES = {
  fr: { home: "/fr", about: "/fr/about", method: "/fr/method", decryptages: "/fr/decryptages" },
  en: { home: "/en", about: "/en/about", method: "/en/method", decryptages: "/en/decryptages" },
  es: { home: "/es", about: "/es/about", method: "/es/method", decryptages: "/es/decryptages" },
  zh: { home: "/zh", about: "/zh/about", method: "/zh/method", decryptages: "/zh/decryptages" }
};
function t(lang, key) {
  return ui[lang][key] ?? ui.fr[key] ?? key;
}

const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Header;
  const { lang, translations } = Astro2.props;
  const routes = ROUTES[lang];
  return renderTemplate`${maybeRenderHead()}<header class="site-header" data-astro-cid-3ef6ksr2> <div class="container header-inner" data-astro-cid-3ef6ksr2> <a${addAttribute(routes.home, "href")} class="brand unstyled" aria-label="Tatakoto" data-astro-cid-3ef6ksr2> <svg viewBox="0 0 200 200" width="40" height="40" aria-hidden="true" data-astro-cid-3ef6ksr2> <circle cx="100" cy="100" r="100" fill="#0F1F3D" data-astro-cid-3ef6ksr2></circle> <polyline points="20,120 80,120 90,125 95,100 100,65 105,100 110,120 115,145 120,160 125,120 180,120" fill="none" stroke="#FF6B6B" stroke-width="3.5" shape-rendering="crispEdges" stroke-linecap="square" stroke-linejoin="miter" data-astro-cid-3ef6ksr2></polyline> <g shape-rendering="crispEdges" fill="#4ECDC4" data-astro-cid-3ef6ksr2> <rect x="99" y="28" width="3" height="3" data-astro-cid-3ef6ksr2></rect> <rect x="96" y="31" width="9" height="3" data-astro-cid-3ef6ksr2></rect> <rect x="93" y="34" width="15" height="3" data-astro-cid-3ef6ksr2></rect> <rect x="90" y="37" width="21" height="3" data-astro-cid-3ef6ksr2></rect> <rect x="93" y="40" width="15" height="3" data-astro-cid-3ef6ksr2></rect> <rect x="96" y="43" width="9" height="3" data-astro-cid-3ef6ksr2></rect> <rect x="99" y="46" width="3" height="3" data-astro-cid-3ef6ksr2></rect> <rect x="140" y="18" width="2" height="2" data-astro-cid-3ef6ksr2></rect> <rect x="138" y="20" width="6" height="2" data-astro-cid-3ef6ksr2></rect> <rect x="140" y="22" width="2" height="2" data-astro-cid-3ef6ksr2></rect> <rect x="62" y="48" width="2" height="2" data-astro-cid-3ef6ksr2></rect> <rect x="60" y="50" width="6" height="2" data-astro-cid-3ef6ksr2></rect> <rect x="62" y="52" width="2" height="2" data-astro-cid-3ef6ksr2></rect> </g> </svg> <span class="brand-name" data-astro-cid-3ef6ksr2>tatakoto</span> </a> <nav aria-label="Main" data-astro-cid-3ef6ksr2> <a${addAttribute(routes.decryptages, "href")} data-astro-cid-3ef6ksr2>${t(lang, "nav.decryptages")}</a> <a${addAttribute(routes.about, "href")} data-astro-cid-3ef6ksr2>${t(lang, "nav.about")}</a> </nav> <div class="lang-switcher" aria-label="Language" data-astro-cid-3ef6ksr2> ${LANGS.map((l) => {
    const href = translations?.[l] ?? `/${l}`;
    const active = l === lang;
    return renderTemplate`<a${addAttribute(href, "href")}${addAttribute(["lang-link", { active }], "class:list")}${addAttribute(l, "hreflang")} data-astro-cid-3ef6ksr2> ${l.toUpperCase()} </a>`;
  })} </div> </div> </header>`;
}, "/sessions/trusting-quirky-newton/mnt/Tatakoto/repo/src/components/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Footer;
  const { lang } = Astro2.props;
  const routes = ROUTES[lang];
  const year = (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate`${maybeRenderHead()}<footer class="site-footer" data-astro-cid-sz7xmlte> <div class="container" data-astro-cid-sz7xmlte> <div class="footer-top" data-astro-cid-sz7xmlte> <div data-astro-cid-sz7xmlte> <div class="footer-brand-name" data-astro-cid-sz7xmlte>tatakoto</div> <div class="footer-tagline" data-astro-cid-sz7xmlte>// ${t(lang, "home.tagline")}</div> </div> <nav class="footer-nav" aria-label="Footer" data-astro-cid-sz7xmlte> <a${addAttribute(routes.about, "href")} data-astro-cid-sz7xmlte>${t(lang, "footer.about")}</a> <a${addAttribute(`mailto:${SITE.email}`, "href")} data-astro-cid-sz7xmlte>${t(lang, "footer.contact")}</a> </nav> </div> <div class="footer-palette" aria-hidden="true" data-astro-cid-sz7xmlte> <span style="background:#0F1F3D" title="Abysse" data-astro-cid-sz7xmlte></span> <span style="background:#1F3D6A" title="Océan" data-astro-cid-sz7xmlte></span> <span style="background:#4ECDC4" title="Lagon" data-astro-cid-sz7xmlte></span> <span style="background:#FFE5A0" title="Sable" data-astro-cid-sz7xmlte></span> <span style="background:#FF6B6B" title="Pulse" data-astro-cid-sz7xmlte></span> </div> <div class="footer-meta" data-astro-cid-sz7xmlte> <span data-astro-cid-sz7xmlte>© ${year} ${SITE.name}</span> <span class="dot" data-astro-cid-sz7xmlte>·</span> <span data-astro-cid-sz7xmlte>${SITE.email}</span> </div> </div> </footer>`;
}, "/sessions/trusting-quirky-newton/mnt/Tatakoto/repo/src/components/Footer.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a, _b;
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { lang, title, description, ogImage = "/og-image.png", translations, jsonLd = [], noIndex = false } = Astro2.props;
  const canonical = new URL(Astro2.url.pathname, SITE.url).toString();
  const fullTitle = title === SITE.name ? `${SITE.name} — ${ui[lang]["home.tagline"]}` : `${title} · ${SITE.name}`;
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    url: SITE.url,
    logo: `${SITE.url}/favicon/android-512.png`,
    description: "Vulgarisation critique de la recherche médicale, augmentée par l'IA.",
    sameAs: [],
    knowsAbout: [
      "Médecine fondée sur les preuves",
      "Intelligence artificielle en santé",
      "Vulgarisation scientifique"
    ]
  };
  return renderTemplate(_b || (_b = __template(["<html", '> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta http-equiv="x-ua-compatible" content="ie=edge"><title>', '</title><meta name="description"', '><link rel="canonical"', ">", '<link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32.png"><link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16.png"><link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon-180.png"><link rel="manifest" href="/manifest.webmanifest">', "", '<meta property="og:type" content="website"><meta property="og:locale"', '><meta property="og:url"', '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:image"', '><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630"><meta property="og:site_name"', '><meta name="twitter:card" content="summary_large_image"><meta name="twitter:site"', '><meta name="twitter:title"', '><meta name="twitter:description"', '><meta name="twitter:image"', '><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&family=Inter:wght@400;500;600;700&family=Noto+Sans+SC:wght@400;500&display=swap"><script type="application/ld+json">', "<\/script>", '<meta name="generator"', "><script async", "><\/script><script>(function(){", "\n      window.dataLayer = window.dataLayer || [];\n      function gtag(){dataLayer.push(arguments);}\n      gtag('js', new Date());\n      gtag('config', gaId);\n    })();<\/script>", "</head> <body> ", " <main> ", " </main> ", " </body></html>"])), addAttribute(lang, "lang"), fullTitle, addAttribute(description, "content"), addAttribute(canonical, "href"), noIndex && renderTemplate`<meta name="robots" content="noindex,nofollow">`, translations && Object.entries(translations).map(([l, path]) => renderTemplate`<link rel="alternate"${addAttribute(LANG_LOCALES[l], "hreflang")}${addAttribute(new URL(path, SITE.url).toString(), "href")}>`), translations && translations.en && renderTemplate`<link rel="alternate" hreflang="x-default"${addAttribute(new URL(translations.en, SITE.url).toString(), "href")}>`, addAttribute(LANG_LOCALES[lang], "content"), addAttribute(canonical, "content"), addAttribute(fullTitle, "content"), addAttribute(description, "content"), addAttribute(new URL(ogImage, SITE.url).toString(), "content"), addAttribute(SITE.name, "content"), addAttribute(SITE.twitter, "content"), addAttribute(fullTitle, "content"), addAttribute(description, "content"), addAttribute(new URL(ogImage, SITE.url).toString(), "content"), unescapeHTML(JSON.stringify(orgSchema)), jsonLd.map((block) => renderTemplate(_a || (_a = __template(['<script type="application/ld+json">', "<\/script>"])), unescapeHTML(block))), addAttribute(Astro2.generator, "content"), addAttribute(`https://www.googletagmanager.com/gtag/js?id=${SITE.gaId}`, "src"), defineScriptVars({ gaId: SITE.gaId }), renderHead(), renderComponent($$result, "Header", $$Header, { "lang": lang, "translations": translations }), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, { "lang": lang }));
}, "/sessions/trusting-quirky-newton/mnt/Tatakoto/repo/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $, ROUTES as R, t };
