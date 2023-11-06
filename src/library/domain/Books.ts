import { Book } from '@/library/domain/Book';
import { Either } from '@/functional/Either';

export interface Books {
  get(): Promise<Either<Error, Book>>;
}
