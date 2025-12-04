import { test, expect } from '@playwright/test';

test.describe('SauceDemo tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
  })

  test('inventory page should display exactly 6 items', async ({ page }) => {
    expect(await page.locator('[data-test="inventory-item"]').count()).toEqual(6);
  });

  test('cart badge should display the number 1', async ({ page }) => {
    await page.locator('[data-test="inventory-item"]').first().locator('//button').filter({ hasText: "Add to cart" }).click()
    await expect(page.locator('[data-test="shopping-cart-badge"]')).toHaveText('1')
  });
})
