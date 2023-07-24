import { dataSelector } from '../Utils';

describe('About', () => {
  it('Should get', () => {
    cy.visit('/about');

    cy.contains(dataSelector('about.title'), 'About title');
    cy.contains(dataSelector('about.description'), 'About description');
  });
});
