import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { inject } from '@/injections.ts';
import { BOOKS } from '@/library/application/LibraryKeys.ts';
import { Book } from '@/library/domain/Book.ts';
import { ISBN } from '@/library/domain/ISBN.ts';
import { Loader, loadError, loadFor, loadInProgress, loadSuccess } from '@/library/infrastructure/primary/Loader.ts';

const BookInfoComponent = ({ book }: { book: Book }) => {
  const { t } = useTranslation();
  return (
    <ul>
      <li data-selector="book.title">
        <strong data-selector="book.label.title">{t('book.title')} </strong>
        <span data-selector="book.title">{book.title}</span>
      </li>
      <li data-selector="book.isbn">{book.isbn.get()}</li>
    </ul>
  );
};

export const BookComponent = (props: { isbn: ISBN }) => {
  const { t } = useTranslation();
  const [bookLoader, setBookLoader] = useState<Loader<Book>>(loadInProgress());

  useEffect(() => {
    setBookLoader(loadInProgress());
    inject(BOOKS)
      .get(props.isbn)
      .then(either =>
        either.evaluate(
          error => setBookLoader(loadError(error.message)),
          content => setBookLoader(loadSuccess(content))
        )
      )
      .catch((error: Error) => setBookLoader(loadError(error.message)));
  }, [props.isbn]);

  return loadFor(bookLoader)({
    progress: () => <p data-selector="book.loading">{t('book.inProgress')}</p>,
    error: message => <p data-selector="book.error">{message}</p>,
    success: book => <BookInfoComponent book={book} />,
  });
};
