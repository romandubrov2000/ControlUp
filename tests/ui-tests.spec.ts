import { test, expect } from '@playwright/test';
import { login } from '../helpers/ui/auth';
import userCredentials from '../testData/userCredentials.json';
import { getAddToCartButtonForItem, inventorySelectors } from '../helpers/ui/inventory';

const { username, password } = userCredentials.users.standard_user;

test.describe('SauceDemo UI tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await login(page, username, password);
  });

  test('inventory page should display exactly 6 items', async ({ page }) => {
    await expect(page.locator(inventorySelectors.item)).toHaveCount(6);
  });

  test('cart badge should display the number 1', async ({ page }) => {
    const inventoryItem = page.locator(inventorySelectors.item).first();
    await getAddToCartButtonForItem(inventoryItem).click();
    await expect(page.locator(inventorySelectors.cartBadge)).toHaveText('1');
  });
});
