export const SITE = {
  url: 'https://www.tatakoto.com',
  name: 'Tatakoto',
  twitter: '@tatakoto',
  email: 'redaction@tatakoto.com',
  gaId: 'G-BP7XHDGN20',
} as const;

export type Lang = 'fr' | 'en' | 'es' | 'zh';
export const LANGS: Lang[] = ['fr', 'en', 'es', 'zh'];

export const LANG_LOCALES: Record<Lang, string> = {
  fr: 'fr-FR',
  en: 'en-US',
  es: 'es-ES',
  zh: 'zh-CN',
};

export const LANG_NAMES: Record<Lang, string> = {
  fr: 'Français',
  en: 'English',
  es: 'Español',
  zh: '中文',
};
