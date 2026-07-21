import { c as createComponent } from './astro-component_C6R-pZ6P.mjs';
import 'piccolore';
import { g as renderTemplate, e as renderHead, c as maybeRenderHead } from './prerender_f07zrkq6.mjs';
import 'clsx';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template([`<html lang="en" data-astro-cid-j7pv25f6> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Tatakoto</title><meta name="description" content="Tatakoto decodes scientific research on artificial intelligence applied to medicine."><link rel="canonical" href="https://www.tatakoto.com/"><link rel="alternate" hreflang="fr-FR" href="https://www.tatakoto.com/fr"><link rel="alternate" hreflang="en-US" href="https://www.tatakoto.com/en"><link rel="alternate" hreflang="es-ES" href="https://www.tatakoto.com/es"><link rel="alternate" hreflang="zh-CN" href="https://www.tatakoto.com/zh"><link rel="alternate" hreflang="x-default" href="https://www.tatakoto.com/en"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32.png"><!-- Google Analytics 4 (gtag.js) --><script async src="https://www.googletagmanager.com/gtag/js?id=G-BP7XHDGN20"><\/script><script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-BP7XHDGN20');
<\/script><script>
(function () {
  var supported = ['fr', 'en', 'es', 'zh'];
  var fallback = 'en';
  var langs = navigator.languages && navigator.languages.length
    ? navigator.languages
    : [navigator.language || navigator.userLanguage || ''];
  var target = fallback;
  for (var i = 0; i < langs.length; i++) {
    var code = String(langs[i] || '').toLowerCase().split('-')[0];
    if (supported.indexOf(code) !== -1) { target = code; break; }
  }
  window.location.replace('/' + target + '/');
})();
<\/script>`, '<noscript><meta http-equiv="refresh" content="0; url=/en/"></noscript>', '</head> <body data-astro-cid-j7pv25f6> <nav class="fallback-nav" aria-label="Language selection" data-astro-cid-j7pv25f6> <a href="/en/" data-astro-cid-j7pv25f6>English</a> <a href="/fr/" data-astro-cid-j7pv25f6>Français</a> <a href="/es/" data-astro-cid-j7pv25f6>Español</a> <a href="/zh/" data-astro-cid-j7pv25f6>中文</a> </nav> </body></html>'])), maybeRenderHead(), renderHead());
}, "/sessions/trusting-quirky-newton/mnt/Tatakoto/repo/src/pages/index.astro", void 0);

const $$file = "/sessions/trusting-quirky-newton/mnt/Tatakoto/repo/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
