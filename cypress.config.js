const { defineConfig } = require('cypress')

module.exports = {
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://web.superfrete.com/',
    pageLoadTimeout: 120000, // Set timeout to 120 seconds
    defaultCommandTimeout: 30000, // Set default command timeout to 30 seconds
    waitForAnimations: false // Disable waiting for animations
  },
  }

