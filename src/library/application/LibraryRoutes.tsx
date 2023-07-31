import { RouteObject } from 'react-router-dom';
import { BookComponent } from '@/library/infrastructure/primary/BookComponent.tsx';
import { LibraryApp } from '@/library/application/LibraryApp.tsx';

export const libraryRoutes: RouteObject =
  {
    path: '/',
    element: <LibraryApp />,
    children: [{
      path: '',
      element: <BookComponent />,
    }],
  }


