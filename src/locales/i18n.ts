import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import ko from './ko.json';
import it from './it.json';
import en from './en.json';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources: {
      en: {
        translation: en,
      },
      ko: {
        translation: ko,
      },
      it: {
        translation: it,
      },
    },
    fallbackLng: 'ko',
  });

export default i18n;
