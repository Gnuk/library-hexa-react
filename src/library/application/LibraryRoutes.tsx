import { RouteObject } from 'react-router-dom';
import { Book } from '@/library/infrastructure/primary/Book.tsx';
import { LibraryApp } from '@/library/application/LibraryApp.tsx';

export const libraryRoutes: RouteObject =
  {
    path: '/',
    element: <LibraryApp />,
    children: [{
      path: '',
      element: <Book />,
    }],
  }


