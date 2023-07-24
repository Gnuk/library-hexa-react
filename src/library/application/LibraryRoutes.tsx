import { RouteObject } from 'react-router-dom';
import { Book } from '@/library/infrastructure/primary/Book.tsx';
import { LibraryApp } from '@/library/application/LibraryApp.tsx';
import { AxiosInstance } from 'axios';

export const libraryRoutes: (axiosOpenLibrary: AxiosInstance) => RouteObject = (axiosOpenLibrary) =>
  ({
    path: '/',
    element: <LibraryApp axiosInstance={axiosOpenLibrary}/>,
    children: [{
      path: '',
      element: <Book />,
    }],
  })


