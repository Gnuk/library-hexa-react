import { Book } from '@/library/domain/Book';
import { Either } from '@/functional/Either';
import { ISBN } from '@/library/domain/ISBN.ts';

export interface Books {
  get(isbn: ISBN): Promise<Either<Error, Book>>;
}
