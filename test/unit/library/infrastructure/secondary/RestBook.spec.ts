import { describe, it, expect } from 'vitest';
import { toBook } from '@/library/infrastructure/secondary/RestBook';
import { Book } from '@/library/domain/Book';
import { ISBN } from '@/library/domain/ISBN.ts';
import { Either, Err, Ok } from '@/functional/Either';
import { bookWithBadISBN, restBook } from './RestBookFixture';

describe('RestBook', () => {
  it('Should convert to domain', () => {
    expect(toBook(restBook)).toEqual<Either<Error, Book>>(
      Ok.of({
        title: 'Domain-driven design',
        isbn: ISBN.of('9780321125217'),
        pages: 529,
      })
    );
  });

  it('Should fail to convert invalid book', () => {
    expect(toBook(bookWithBadISBN)).toEqual<Either<Error, Book>>(Err.of(new Error('The ISBN size is not valid')));
  });
});
