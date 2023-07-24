import { dataSelector, loadLanguage } from '../Utils';

describe('About', () => {
  it('Should get for english', () => {
    cy.visit('/about', loadLanguage('en'));

    cy.contains(dataSelector('about.title'), 'About title');
    cy.contains(dataSelector('about.description'), 'About description');
  });

  it('Should get for french', () => {
    cy.visit('/about', loadLanguage('fr'));

    cy.contains(dataSelector('about.title'), 'Titre à propos');
    cy.contains(dataSelector('about.description'), 'À propos de la description');
  });
});
