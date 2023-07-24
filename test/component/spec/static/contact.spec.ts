import { dataSelector } from '../Utils';

describe('Contact', () => {
  it('Should get', () => {
    cy.visit('/contact');

    cy.contains(dataSelector('contact.title'), 'Contact us');
    cy.contains(dataSelector('contact.email'), 'library@contact.me');
  });
});
