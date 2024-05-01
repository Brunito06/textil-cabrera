import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';
import detector from 'i18next-browser-languagedetector';

const Languages = ['en', 'es'];

i18n
  .use(Backend)
  .use(detector)
  .use(initReactI18next)
  .init({
    lng: 'en',
    fallbackLng: 'en',
    debug: false,
    whitelist: Languages,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    nsSeperator: false,
    keySeperator: false,
    backend: {
      loadPath: '../locales/{{lng}}/translation.json',
    },
  });

export default i18n;