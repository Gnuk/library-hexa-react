import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import {toTranslationResources} from "@/Translations.ts";
import {staticTranslations} from "@/static/language/staticTranslations.ts";
import {libraryTranslations} from "@/library/application/language/LibraryTranslations.ts";
import { createI18nStore } from "svelte-i18next";

i18next.use(LanguageDetector).init({
  resources: toTranslationResources(staticTranslations, libraryTranslations),
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default createI18nStore(i18next);
