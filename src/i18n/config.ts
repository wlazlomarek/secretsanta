import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { en } from './en';
import { pl } from './pl';

export type Translations = typeof pl;

const resources = {
  pl: { translation: pl },
  en: { translation: en }
} satisfies Record<string, { translation: Translations }>;

export const SUPPORTED_LANGUAGES = Object.keys(resources);

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'pl',
    interpolation: {
      escapeValue: false
    }
  });

// Type augmentation for useTranslation hook
declare module 'i18next' {
  interface CustomTypeOptions {
    resources: typeof resources['pl'];
  }
}

export default i18n; 