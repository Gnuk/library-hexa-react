import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3030',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    downloadsFolder: 'test/component/downloads',
    specPattern: 'test/component/**/*.spec.ts',
    supportFile: 'test/component/support/e2e.ts',
    fixturesFolder: 'test/component/fixtures',
    screenshotsFolder: 'test/component/screenshots',
    videosFolder: 'test/component/videos',
  },
});
