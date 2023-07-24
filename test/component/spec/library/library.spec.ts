import { dataSelector } from '../Utils';

const BOOK = {
  title: 'Domain-driven design',
  isbn_13: ['9780321125217'],
  number_of_pages: 42,
};

const stubOpenLibraryIsbn = () =>
  cy.intercept('https://openlibrary.org/isbn/9780321125217.json', BOOK);

const stubOpenLibraryIsbnInvalid = () =>
  cy.intercept('https://openlibrary.org/isbn/9780321125217.json', {
    title: 'Domain-driven design',
    isbn_13: ['invalid'],
    number_of_pages: 42,
  });

const stubOpenLibraryIsbnNetworkError = () =>
  cy.intercept('https://openlibrary.org/isbn/9780321125217.json', {
    statusCode: 404,
    body: {},
  });

const stubOpenLibraryIsbnPending = () =>
  cy.intercept('https://openlibrary.org/isbn/9780321125217.json',
    {
      delay: 1000,
      body: BOOK,
    });

describe('Library', () => {
  it('Should be loading before result', () => {
    stubOpenLibraryIsbnPending();

    cy.visit('/');

    cy.contains(dataSelector('book.loading'), 'In progress');
  });

  it('Should not show book with network error', () => {
    stubOpenLibraryIsbnNetworkError();

    cy.visit('/');

    cy.contains(dataSelector('book.error'), 'Request failed');
  });

  it('Should not show book with invalid ISBN', () => {
    stubOpenLibraryIsbnInvalid();

    cy.visit('/');

    cy.contains(dataSelector('book.error'), 'Non digits are not allowed for ISBN');
  });

  it('Should get book', () => {
    stubOpenLibraryIsbn();

    cy.visit('/');

    cy.contains(dataSelector('book.title'), 'Domain-driven design');
    cy.contains(dataSelector('book.isbn'), '9780321125217');
  });
});
