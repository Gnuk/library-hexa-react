import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import i18n from "i18next";
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { toTranslationResources } from '@/Translations.ts';
import { staticRoutes, staticTranslations } from '@/static';
import { libraryProvider, libraryRoutes, libraryTranslations } from '@/library';
import {modalProvider, ModalArea} from "@/modal";

const router = createBrowserRouter([libraryRoutes, ...staticRoutes]);

void i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources: toTranslationResources(staticTranslations, libraryTranslations),
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    }
  });

modalProvider();
libraryProvider();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <ModalArea />
  </React.StrictMode>,
)
