import { test, expect } from '@playwright/test';
import { login } from '../helpers/auth-ui';
import userCredentials from '../testData/userCredentials.json';
import { getAddToCartButtonForItem, inventorySelectors } from '../helpers/inventory';

const { username, password } = userCredentials.users.standard_user;

test.describe('SauceDemo UI tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await login(page, username, password);
  });

  test('inventory page should display exactly 6 items', async ({ page }) => {
    expect(await page.locator(inventorySelectors.item).count()).toEqual(6);
  });

  test('cart badge should display the number 1', async ({ page }) => {
    const inventoryItem = await page.locator(inventorySelectors.item).first();
    await getAddToCartButtonForItem(inventoryItem).click();
    await expect(page.locator(inventorySelectors.cartBadge)).toHaveText('1');
  });
});
