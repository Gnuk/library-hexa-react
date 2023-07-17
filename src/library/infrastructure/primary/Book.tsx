import { useContext, useState } from 'react';
import { BooksContext } from '@/library/application/BooksContext';
import { useLoadEither } from '@/library/infrastructure/primary/UseLoad';

export const Book = () => {
  const books = useContext(BooksContext);

  const [title, setTitle] = useState('');
  const [isbn, setISBN] = useState('');

  const {isInProgress, isFailing, isSuccessful, errorMessage} = useLoadEither(books.get(), book => {
    setTitle(book.title);
    setISBN(book.isbn.get());
  });

  return (
    <>
      { isInProgress &&
        <p data-selector="book.loading">In progress</p>
      }
      { isFailing &&
        <p data-selector="book.error">{errorMessage}</p>
      }
      { isSuccessful &&
        <ul>
          <li data-selector="book.title">{title}</li>
          <li data-selector="book.isbn">{isbn}</li>
        </ul>
      }
    </>
  )
};
