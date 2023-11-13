import { RouteObject, useParams } from 'react-router-dom';
import { BookComponent } from '@/library/infrastructure/primary/BookComponent.tsx';
import { LibraryApp } from '@/library/application/LibraryApp.tsx';
import { ISBN } from '@/library/domain/ISBN.ts';

const BooksPage = () => {
  const { isbn } = useParams<string>();
  return <BookComponent isbn={ISBN.of(isbn!)} />;
};

export const libraryRoutes: RouteObject = {
  path: '/',
  element: <LibraryApp />,
  children: [
    {
      path: 'book/:isbn',
      element: <BooksPage />,
    },
  ],
};
