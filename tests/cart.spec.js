import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';

test.describe('Cart', () => {

  test.beforeEach(async ({ page }) => {
    const login = new LoginPage(page);
    await login.goto();
    await login.login('standard_user', 'secret_sauce');
    await expect(page).toHaveURL(/inventory/);
  });

  test('Add product to cart', async ({ page }) => {
    const inventory = new InventoryPage(page);

    await inventory.addFirstProductToCart();
    await expect(page.locator(inventory.cartBadge)).toHaveText('1');
  });

  test('Remove product from cart', async ({ page }) => {
    const inventory = new InventoryPage(page);

    await inventory.addFirstProductToCart();
    await inventory.removeFirstProductFromCart();

    await expect(page.locator(inventory.cartBadge)).toHaveCount(0);
  });

});