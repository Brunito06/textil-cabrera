import i18n from 'i18next';
// import Backend from 'i18next-http-backend';
// import detector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import translationEN from '../locales/en/translation.json'
import translationES from '../locales/es/translation.json'

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)

const resources = {
  en: {
    translation: translationEN,
  },
  es:{
    translation: translationES,
  },
}

i18n
  // .use(Backend)
  // .use(detector)
  .use(initReactI18next) // passes i18n down to react-i18next

  .init({
    resources,
    fallbackLng: 'es',
    debug: true,
    detection: {
      lookupQuerystring: 'lang',
    },
  });

export default i18n;