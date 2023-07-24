import React from 'react'
import ReactDOM from 'react-dom/client'
import axios from 'axios';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { libraryRoutes } from '@/library/application/LibraryRoutes.tsx';
import { staticRoutes } from '@/static/StaticRoutes.tsx';

const axiosOpenLibrary = axios.create({
  baseURL: "https://openlibrary.org",
});

const router = createBrowserRouter([libraryRoutes(axiosOpenLibrary), ...staticRoutes]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
