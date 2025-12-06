import type { Page } from '@playwright/test';

const authSelectors = {
  username: '[data-test="username"]',
  password: '[data-test="password"]',
  loginButton: '[data-test="login-button"]',
};

export async function login(page: Page, username: string, password: string) {
  await page.fill(authSelectors.username, username);
  await page.fill(authSelectors.password, password);
  await page.click(authSelectors.loginButton);
}
