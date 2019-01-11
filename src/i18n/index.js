import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import localeEn from './locale.en.json';
import localeVi from './locale.vi.json';

// the translations
const resources = {
  en: {
    translation: localeEn,
  },
  vi: {
    translation: localeVi,
  },
};

i18n.use(LanguageDetector).init({
  resources,
  fallbackLng: 'en',
  lng: 'en',
  keySeparator: '.', // we do not use keys in form messages.welcome
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
});

export default i18n;
