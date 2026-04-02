import es from './es.json';
import ca from './ca.json';
import en from './en.json';

export type Lang = 'es' | 'ca' | 'en';

const translations: Record<Lang, Record<string, any>> = { es, ca, en };

export const defaultLang: Lang = 'es';
export const supportedLangs: Lang[] = ['es', 'ca', 'en'];

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

/**
 * Resolve lang from cookie, query param, or Accept-Language header.
 */
export function resolveLang(request: Request): Lang {
  const url = new URL(request.url);

  // 1. ?lang=xx query param
  const qp = url.searchParams.get('lang');
  if (qp && supportedLangs.includes(qp as Lang)) return qp as Lang;

  // 2. cookie
  const cookie = request.headers.get('cookie') ?? '';
  const match = cookie.match(/(?:^|;\s*)lang=(\w+)/);
  if (match && supportedLangs.includes(match[1] as Lang)) return match[1] as Lang;

  // 3. Accept-Language header
  const accept = request.headers.get('accept-language') ?? '';
  for (const part of accept.split(',')) {
    const code = part.trim().split(';')[0].split('-')[0].toLowerCase();
    if (supportedLangs.includes(code as Lang)) return code as Lang;
  }

  return defaultLang;
}

/** Build hreflang link tags for a given path */
export function hreflangLinks(path: string): { lang: string; href: string }[] {
  const base = 'https://www.xavierberga.com';
  const canonical = `${base}${path}`;
  return [
    { lang: 'es-ES', href: canonical },
    { lang: 'ca', href: `${canonical}${path.includes('?') ? '&' : '?'}lang=ca` },
    { lang: 'en', href: `${canonical}${path.includes('?') ? '&' : '?'}lang=en` },
    { lang: 'x-default', href: canonical },
  ];
}
