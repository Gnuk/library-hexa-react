export const dataSelector = (selector: string) => `[data-selector="${selector}"]`;

export const loadLanguage = (lang: string) => ({
  onBeforeLoad(win: Cypress.AUTWindow) {
    win.localStorage.setItem('i18nextLng', lang);
  },
});
