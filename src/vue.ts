import { createApp } from 'vue';
import VueMain from './VueMain.vue';
import {libraryProvider, libraryTranslations, libraryVueRoutes} from '@/library/vue';
import { createRouter, createWebHistory } from 'vue-router';
import i18next from 'i18next';
import I18NextVue from 'i18next-vue';
import { toTranslationResources } from '@/Translations.ts';
import LanguageDetector from 'i18next-browser-languagedetector';
import {staticTranslations, staticVueRoutes} from "@/static/vue.ts";
import {vueModalProvider} from "@/modal/vue.ts";

export const createVue = () => {
  const router = createRouter({
    history: createWebHistory(),
    routes: [libraryVueRoutes, ...staticVueRoutes],
  });

  void i18next.use(LanguageDetector).init({
    resources: toTranslationResources(staticTranslations, libraryTranslations),
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

  vueModalProvider();
  libraryProvider();

  createApp(VueMain).use(router).use(I18NextVue, { i18next }).mount('#app');
};
