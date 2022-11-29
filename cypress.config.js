const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('task', {
        log(message) {
          console.log("Printing from task (log): " + message)
          return null
        },
        table(message) {
          console.log("Printing from task (table): " + message)
          return null
        }
      })
    },
  },
  env: {
    baseUrl_: 'https://www.drupal.org/project/dummyimage',
    baseUrl: "https://rahulshettyacademy.com/consulting",
    baseUrl__: 'http://web.simmons.edu/~grovesd/comm244/notes/week3/html-test-page.html',
  }
});

require('@applitools/eyes-cypress')(module);