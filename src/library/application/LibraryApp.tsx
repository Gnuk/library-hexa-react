import { LibraryProvider } from '@/library/application/LibraryProvider.tsx';
import { AxiosInstance } from 'axios';
import { Outlet } from 'react-router-dom';

export const LibraryApp = (props: { axiosInstance: AxiosInstance }) =>
  (
    <LibraryProvider axiosInstance={props.axiosInstance}>
      <Outlet/>
    </LibraryProvider>
  );
