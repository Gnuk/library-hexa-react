import { dataSelector, loadLanguage } from '../Utils';

const BOOK = {
  title: 'Domain-driven design',
  isbn_13: ['9780321125217'],
  number_of_pages: 42,
};

const stubOpenLibraryIsbn = () => cy.intercept('https://openlibrary.org/isbn/9780321125217.json', BOOK).as('BOOK');

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
  cy.intercept('https://openlibrary.org/isbn/9780321125217.json', {
    delay: 1000,
    body: BOOK,
  });

describe('Library', () => {
  describe('Should be loading before result', () => {
    beforeEach(() => {
      stubOpenLibraryIsbnPending();
    });

    it('Should be loading before result', () => {
      cy.visit('/book/9780321125217', loadLanguage('en'));

      cy.contains(dataSelector('book.loading'), 'In progress');
    });

    it('Should be loading before result', () => {
      cy.visit('/book/9780321125217', loadLanguage('fr'));

      cy.contains(dataSelector('book.loading'), 'En cours');
    });
  });

  it('Should not show book with network error', () => {
    stubOpenLibraryIsbnNetworkError();

    cy.visit('/book/9780321125217');

    cy.contains(dataSelector('book.error'), 'Request failed');
  });

  it('Should not show book with invalid ISBN', () => {
    stubOpenLibraryIsbnInvalid();

    cy.visit('/book/9780321125217');

    cy.contains(dataSelector('book.error'), 'Non digits are not allowed for ISBN');
  });

  it('Should get book', () => {
    stubOpenLibraryIsbn();

    cy.visit('/book/9780321125217');

    cy.contains(dataSelector('book.title'), 'Domain-driven design');
    cy.contains(dataSelector('book.isbn'), '9780321125217');
  });

  describe('Translations', () => {
    it('Should have english labels', () => {
      stubOpenLibraryIsbn();

      cy.visit('/book/9780321125217', loadLanguage('en'));

      cy.contains(dataSelector('book.label.title'), 'Title: ');
    });

    it('Should have french labels', () => {
      stubOpenLibraryIsbn();

      cy.visit('/book/9780321125217', loadLanguage('fr'));

      cy.contains(dataSelector('book.label.title'), 'Titre : ');
    });
  });
});
