import { Book } from '@/library/domain/Book';
import { ISBN } from '@/library/domain/ISBN.ts';
import { Either } from '@/functional/Either';

export interface RestBook {
  title: string;
  number_of_pages: number;
  isbn_13: [string];
}

export const toBook = (restBook: RestBook): Either<Error, Book> => {
  const {
    isbn_13: [isbn],
    title,
    number_of_pages,
  } = restBook;

  return Either.tryFrom(() => ({
    isbn: ISBN.of(isbn),
    title,
    pages: number_of_pages,
  }));
};
