import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { libraryRoutes } from '@/library/application/LibraryRoutes.tsx';
import { staticRoutes } from '@/static/StaticRoutes.tsx';
import i18n from "i18next";
import { initReactI18next } from 'react-i18next';
import { staticTranslations } from '@/static/language/StaticTranslations.ts';
import LanguageDetector from 'i18next-browser-languagedetector';
import { libraryTranslations } from '@/library/application/language/LibraryTranslations.ts';
import { toTranslationResources } from '@/Translations.ts';
import { libraryProvider } from '@/library/application/LibraryProvider.ts';

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

libraryProvider();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
