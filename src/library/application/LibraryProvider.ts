import axios from 'axios';
import { provide } from '@/injections.ts';
import { BOOKS } from '@/library/application/LibraryKeys.ts';
import { RestBooks } from '@/library/infrastructure/secondary/RestBooks.ts';

export const libraryProvider = () => {
  const axiosOpenLibrary = axios.create({
    baseURL: "https://openlibrary.org",
  });
  provide(BOOKS, new RestBooks(axiosOpenLibrary));
}
