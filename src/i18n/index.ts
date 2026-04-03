import es from './es.json';
import ca from './ca.json';
import en from './en.json';

export type Lang = 'es' | 'ca' | 'en';

const translations: Record<Lang, Record<string, any>> = { es, ca, en };

export const defaultLang: Lang = 'es';
export const supportedLangs: Lang[] = ['es', 'ca', 'en'];
const prefixedLangs = supportedLangs.filter((lang) => lang !== defaultLang);
const baseUrl = 'https://www.xavierberga.com';

/**
 * Deep-get a nested key from a translation object.
 * Supports dot-notation: t('home.services.ai.title')
 * Also supports returnObjects-style access for arrays.
 */
export function t(lang: Lang, key: string): any {
  const dict = translations[lang] ?? translations[defaultLang];
  const parts = key.split('.');
  let val: any = dict;
  for (const p of parts) {
    if (val == null) return key;
    val = val[p];
  }
  return val ?? key;
}

function normalizePath(path: string): string {
  if (!path) return '/';
  let normalized = path.startsWith('/') ? path : `/${path}`;
  if (normalized.length > 1 && normalized.endsWith('/')) {
    normalized = normalized.slice(0, -1);
  }
  return normalized || '/';
}

export function stripLangFromPath(path: string): string {
  const normalized = normalizePath(path);

  for (const lang of prefixedLangs) {
    if (normalized === `/${lang}`) return '/';
    if (normalized.startsWith(`/${lang}/`)) {
      return normalized.slice(lang.length + 1) || '/';
    }
  }

  return normalized;
}

export function langFromPath(path: string): Lang {
  const normalized = normalizePath(path);

  for (const lang of prefixedLangs) {
    if (normalized === `/${lang}` || normalized.startsWith(`/${lang}/`)) {
      return lang;
    }
  }

  return defaultLang;
}

export function localePath(lang: Lang, path: string): string {
  const normalized = stripLangFromPath(path);
  if (lang === defaultLang) return normalized;
  return normalized === '/' ? `/${lang}` : `/${lang}${normalized}`;
}

export function absoluteUrl(path: string): string {
  return new URL(path, baseUrl).toString();
}

export function resolveLang(request: Request): Lang {
  return langFromPath(new URL(request.url).pathname);
}

export function hreflangLinks(path: string): { lang: string; href: string }[] {
  const logicalPath = stripLangFromPath(path);
  return [
    { lang: 'es-ES', href: absoluteUrl(localePath('es', logicalPath)) },
    { lang: 'ca', href: absoluteUrl(localePath('ca', logicalPath)) },
    { lang: 'en', href: absoluteUrl(localePath('en', logicalPath)) },
    { lang: 'x-default', href: absoluteUrl(localePath(defaultLang, logicalPath)) },
  ];
}
