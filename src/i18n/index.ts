import { es } from './es';
import { en } from './en';

export type Lang = 'es' | 'en';
export type Key = keyof typeof es;

export const dict: Record<Lang, Record<Key, string>> = { es, en };

export const site = {
  url: 'https://stefanodelmonte.com',
  email: 'contactstefanodelmonte@gmail.com',
  linkedin: 'https://www.linkedin.com/in/delmontestefano/',
  github: 'https://github.com/stefanodelmonte',
  // Solo hay CV en castellano por ahora; añade el inglés aquí cuando exista
  cv: { es: '/cv/stefano-delmonte-cv-es.pdf', en: '/cv/stefano-delmonte-cv-es.pdf' },
  path: { es: '/', en: '/en/' },
  locale: { es: 'es_ES', en: 'en_GB' },
} as const;

export const t = (lang: Lang, key: Key) => dict[lang][key];
