import { dataSelector, loadLanguage } from '../Utils';

describe('About', () => {
  it('Should get for english', () => {
    cy.visit('/about', loadLanguage('en'));

    cy.contains(dataSelector('about.title'), 'About title');
    cy.contains(dataSelector('about.description'), 'About description');
    cy.contains(dataSelector('about.more-info.button'), 'More info');
  });

  it('Should get for french', () => {
    cy.visit('/about', loadLanguage('fr'));

    cy.contains(dataSelector('about.title'), 'Titre à propos');
    cy.contains(dataSelector('about.description'), 'À propos de la description');
    cy.contains(dataSelector('about.more-info.button'), "Plus d'informations");
  });

  describe('Modal info', () => {
    beforeEach(() => {
      cy.visit('/about', loadLanguage('en'));
    });
    it('should open for more info', () => {
      cy.get(dataSelector('about.more-info.button')).click();

      cy.contains(dataSelector('modal.title'), 'More info');
    });
    it('should open for usage conditions', () => {
      cy.get(dataSelector('about.cgu.button')).click();

      cy.contains(dataSelector('modal.title'), 'Usage conditions');
    });
    it('should close', () => {
      cy.get(dataSelector('about.more-info.button')).click();

      cy.get(dataSelector('modal.close')).click();

      cy.get(dataSelector('modal.title')).should('not.exist');
    });
  });
});
