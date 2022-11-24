const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    baseUrl_: 'https://www.drupal.org/project/dummyimage',
    baseUrl: "https://rahulshettyacademy.com/consulting",
    baseUrl__: 'http://web.simmons.edu/~grovesd/comm244/notes/week3/html-test-page.html',
  }
});
