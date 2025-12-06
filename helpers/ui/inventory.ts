import { Locator } from '@playwright/test';

export const inventorySelectors = {
    item: '[data-test="inventory-item"]',
    cartBadge: '[data-test="shopping-cart-badge"]',
};

export function getAddToCartButtonForItem(item: Locator): Locator {
    return item.getByRole('button', { name: 'Add to cart' });
}
