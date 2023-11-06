import { RestBook } from '@/library/infrastructure/secondary/RestBook';

export const restBook: RestBook = {
  number_of_pages: 529,
  title: 'Domain-driven design',
  isbn_13: ['9780321125217'],
};

export const bookWithBadISBN: RestBook = {
  number_of_pages: 529,
  title: 'Domain-driven design',
  isbn_13: ['123'],
};
