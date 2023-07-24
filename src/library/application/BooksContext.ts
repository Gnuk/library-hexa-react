import { Books } from '@/library/domain/Books';
import { RestBooks } from '@/library/infrastructure/secondary/RestBooks';
import { AxiosInstance } from 'axios';
import { provideContext } from '@/ProvideContext.ts';

interface BooksOptions {
  axiosInstance: AxiosInstance;
}

export const BooksContext = provideContext<Books>();

export const provideBooks = ({axiosInstance}: BooksOptions): Books => new RestBooks(axiosInstance);
