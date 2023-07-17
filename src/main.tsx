import React from 'react'
import ReactDOM from 'react-dom/client'
import { LibraryApp } from '@/library/application/LibraryApp.tsx';
import axios from 'axios';

const axiosOpenLibrary = axios.create({
  baseURL: "https://openlibrary.org",
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LibraryApp axiosInstance={axiosOpenLibrary} />
  </React.StrictMode>,
)
