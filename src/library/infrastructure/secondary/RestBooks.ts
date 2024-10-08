import { Books } from '@/library/domain/Books';
import { Either } from '@/functional/Either';
import { Book } from '@/library/domain/Book';
import { AxiosInstance } from 'axios';
import { RestBook, toBook } from '@/library/infrastructure/secondary/RestBook';
import { ISBN } from '@/library/domain/ISBN.ts';

export class RestBooks implements Books {
  constructor(private readonly axiosInstance: AxiosInstance) {}

  get(isbn: ISBN): Promise<Either<Error, Book>> {
    return this.axiosInstance
      .get<RestBook>(`/isbn/${isbn.get()}.json`)
      .then(response => response.data)
      .then(toBook)
      .catch(error => Promise.resolve(Either.err(error)));
  }
}
