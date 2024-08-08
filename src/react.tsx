import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { toTranslationResources } from '@/Translations.ts';
import { staticReactRoutes, staticTranslations } from '@/static/react';
import { libraryProvider, libraryReactRoutes, libraryTranslations } from '@/library/react.tsx';
import { reactModalProvider, ReactModalArea } from '@/modal/react';

export const createReact = () => {
  const router = createBrowserRouter([libraryReactRoutes, ...staticReactRoutes]);

  void i18n
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
      resources: toTranslationResources(staticTranslations, libraryTranslations),
      fallbackLng: 'en',
      interpolation: {
        escapeValue: false,
      },
    });

  reactModalProvider();
  libraryProvider();

  ReactDOM.createRoot(document.getElementById('app')!).render(
    <React.StrictMode>
      <RouterProvider router={router} />
      <ReactModalArea />
    </React.StrictMode>
  );
};
