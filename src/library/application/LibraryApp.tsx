import { LibraryProvider } from '@/library/application/LibraryProvider.tsx';
import { AxiosInstance } from 'axios';
import { Book } from '@/library/infrastructure/primary/Book.tsx';

export const LibraryApp = (props: { axiosInstance: AxiosInstance }) =>
  (
    <LibraryProvider axiosInstance={props.axiosInstance}>
      <Book/>
    </LibraryProvider>
  );
