import { useEffect, useReducer } from 'react';
import { useTranslation } from 'react-i18next';
import { inject } from '@/injections.ts';
import { BOOKS } from '@/library/application/LibraryKeys.ts';
import { Book } from '@/library/domain/Book.ts';
import { ISBN } from '@/library/domain/ISBN.ts';
import { useNavigate } from 'react-router-dom';

const PageInProgress = Symbol();
const PageError = Symbol();
const PageSuccess = Symbol();

type PageStatus = typeof PageError | typeof PageInProgress | typeof PageSuccess;

interface PageState<T> {
  content?: T;
  errorMessage?: string;
  status: PageStatus;
}

interface TypeAction {
  type: PageStatus;
}

interface InProgressAction extends TypeAction {
  type: typeof PageInProgress;
}

interface SuccessAction<T> extends TypeAction {
  type: typeof PageSuccess;
  content: T;
}

interface ErrorAction extends TypeAction {
  type: typeof PageError;
  message: string;
}

function pageStateReducer<T>(_: PageState<T>, actions: InProgressAction | SuccessAction<T> | ErrorAction): PageState<T> {
  switch (actions.type) {
    case PageSuccess:
      return { content: actions.content, status: actions.type };
    case PageInProgress:
      return { status: actions.type };
    case PageError:
      return { errorMessage: actions.message, status: actions.type };
  }
}

export const BookComponent = (props: { isbn: ISBN }) => {
  const books = inject(BOOKS);

  const { t } = useTranslation();
  const navigate = useNavigate();
  const [page, setPage] = useReducer<typeof pageStateReducer<Book>>(pageStateReducer, { status: PageInProgress });

  useEffect(() => {
    setPage({ type: PageInProgress });
    books
      .get(props.isbn)
      .then(either =>
        either.evaluate(
          error => setPage({ type: PageError, message: error.message }),
          content => setPage({ type: PageSuccess, content: content })
        )
      )
      .catch((error: Error) => {
        setPage({ type: PageError, message: error.message });
      });
  }, [props.isbn]);

  return (
    <>
      {page.status === PageInProgress && <p data-selector="book.loading">{t('book.inProgress')}</p>}
      {page.status === PageError && <p data-selector="book.error">{page.errorMessage!}</p>}
      {page.status === PageSuccess && (
        <ul>
          <li data-selector="book.title">
            <strong data-selector="book.label.title">{t('book.title')} </strong>
            <span data-selector="book.title">{page.content?.title}</span>
          </li>
          <li data-selector="book.isbn">{page.content?.isbn.get()}</li>
          <button onClick={() => navigate('/book/9782070541270')}>HP</button>
          <button onClick={() => navigate('/book/9780321125217')}>DDD</button>
        </ul>
      )}
    </>
  );
};
