import { useState } from 'react';
import { useLoadEither } from '@/library/infrastructure/primary/UseLoad';
import { useTranslation } from 'react-i18next';
import { inject } from '@/injections.ts';
import { BOOKS } from '@/library/application/LibraryKeys.ts';
import { Book } from '@/library/domain/Book.ts';

export const BookComponent = () => {
  const books = inject(BOOKS);

  const { t } = useTranslation();
  const [book, setBook] = useState<Book>();

  const { isInProgress, isFailing, isSuccessful, errorMessage } = useLoadEither(books.get(), book => {
    setBook(book);
  });

  return (
    <>
      {isInProgress && <p data-selector="book.loading">{t('book.inProgress')}</p>}
      {isFailing && <p data-selector="book.error">{errorMessage}</p>}
      {isSuccessful && (
        <ul>
          <li data-selector="book.title">
            <strong data-selector="book.label.title">{t('book.title')} </strong>
            <span data-selector="book.title">{book?.title}</span>
          </li>
          <li data-selector="book.isbn">{book?.isbn.get()}</li>
        </ul>
      )}
    </>
  );
};
