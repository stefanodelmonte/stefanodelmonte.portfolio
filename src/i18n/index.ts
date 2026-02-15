import { es } from './es';
import { en } from './en';

export const translations = { es, en };
export type Lang = keyof typeof translations;
export const defaultLang: Lang = 'es';
