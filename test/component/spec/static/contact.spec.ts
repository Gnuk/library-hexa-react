import { dataSelector, loadLanguage } from '../Utils';

describe('Contact', () => {
  it('Should get for english', () => {
    cy.visit('/contact', loadLanguage('en'));

    cy.contains(dataSelector('contact.title'), 'Contact us');
    cy.contains(dataSelector('contact.email'), 'library@contact.en');
  });

  it('Should get for french', () => {
    cy.visit('/contact', loadLanguage('fr'));

    cy.contains(dataSelector('contact.title'), 'Contactez-nous');
    cy.contains(dataSelector('contact.email'), 'library@contact.fr');
  });
});
