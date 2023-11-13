import { describe, it, expect } from 'vitest';
import { RestBooks } from '@/library/infrastructure/secondary/RestBooks';
import { AxiosInstance, AxiosResponse } from 'axios';
import sinon, { SinonStub } from 'sinon';
import { RestBook } from '@/library/infrastructure/secondary/RestBook';
import { restBook } from './RestBookFixture';
import { Either, Err, Ok } from '@/functional/Either';
import { Book } from '@/library/domain/Book';
import { ISBN } from '@/library/domain/ISBN.ts';

interface AxiosInstanceStub extends AxiosInstance {
  get: SinonStub;
}

const stubAxiosInstance = (): AxiosInstanceStub =>
  ({
    get: sinon.stub(),
  }) as AxiosInstanceStub;

const FAKE_ISBN = ISBN.of('9780321125217');

describe('RestBooks', () => {
  it('Should get book', async () => {
    const axiosInstance = stubAxiosInstance();
    const response: AxiosResponse<RestBook> = {
      data: restBook,
    } as AxiosResponse<RestBook>;
    axiosInstance.get.resolves(response);
    const repository = new RestBooks(axiosInstance);

    const eitherBook = await repository.get(FAKE_ISBN);

    expect(axiosInstance.get.getCall(0).args).toContain('/isbn/9780321125217.json');
    expect(eitherBook).toEqual<Either<Error, Book>>(
      Ok.of({
        title: 'Domain-driven design',
        isbn: ISBN.of('9780321125217'),
        pages: 529,
      })
    );
  });

  it('Should error on rejection', async () => {
    const axiosInstance = stubAxiosInstance();
    axiosInstance.get.rejects(new Error('Network error'));
    const repository = new RestBooks(axiosInstance);

    const eitherBook = await repository.get(FAKE_ISBN);

    expect(eitherBook).toEqual<Either<Error, Book>>(Err.of(new Error('Network error')));
  });
});
