import { BooksContext, provideBooks } from '@/library/application/BooksContext';
import { PropsWithChildren } from 'react';
import { AxiosInstance } from 'axios';

export const LibraryProvider = (props: PropsWithChildren<{axiosInstance: AxiosInstance}>) =>
  (
    <BooksContext.Provider value={provideBooks({axiosInstance: props.axiosInstance})}>
      {props.children}
    </BooksContext.Provider>
  );
