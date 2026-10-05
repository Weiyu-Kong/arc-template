const { defineConfig } = require('@playwright/test');

const defaultBaseURL = 'http://localhost:3000'; // ARC_PLAYWRIGHT_BASE_URL
const baseURL = process.env.PLAYWRIGHT_BASE_URL
  || process.env.ARC_WEB_BASE_URL
  || defaultBaseURL;

module.exports = defineConfig({
  testDir: './test-e2e',
  testMatch: /.*\.(js|jsx|ts|tsx)$/,
  timeout: 5000,
  use: {
    baseURL,
    trace: 'retain-on-failure',
  },
});
