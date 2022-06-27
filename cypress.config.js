const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    // baseUrl: "http://localhost:3000",
    // baseUrl: "https://www.google.com.ua/",
    supportFile: false,
    video: false
  }
});
