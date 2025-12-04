import { defineConfig, devices } from '@playwright/test';

const UI_BASE_URL = 'https://www.saucedemo.com';
const API_BASE_URL = 'https://airportgap.com';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'ui-chromium',
      use: { ...devices['Desktop Chrome'], baseURL: UI_BASE_URL },
      testMatch: /.*ui-tests\.spec\.ts/
    },

    {
      name: 'ui-firefox',
      use: { ...devices['Desktop Firefox'], baseURL: UI_BASE_URL },
      testMatch: /.*ui-tests\.spec\.ts/
    },

    {
      name: 'ui-webkit',
      use: { ...devices['Desktop Safari'], baseURL: UI_BASE_URL },
      testMatch: /.*ui-tests\.spec\.ts/
    },

    {
      name: 'ui-mobile-chrome',
      use: { ...devices['Pixel 5'], baseURL: UI_BASE_URL },
      testMatch: /.*ui-tests\.spec\.ts/
    },

    {
      name: 'ui-mobile-safari',
      use: { ...devices['iPhone 12'], baseURL: UI_BASE_URL },
      testMatch: /.*ui-tests\.spec\.ts/
    },

    {
      name: 'api-tests',
      use: { baseURL: API_BASE_URL },
      testMatch: /.*api-tests\.spec\.ts/
    },
  ],
});
