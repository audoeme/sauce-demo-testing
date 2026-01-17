import { test, expect } from '@playwright/test';
import { LoginPage } from '../src/pages/LoginPage';
import { InventoryPage } from '../src/pages/InventoryPage';
import { CartPage } from '../src/pages/CartPage';
import { CheckoutPage } from '../src/pages/CheckoutPage';

test.describe('Checkout', () => {

  test.beforeEach(async ({ page }) => {
    const login = new LoginPage(page);
    await login.goto();
    await login.login('standard_user', 'secret_sauce');
    await expect(page).toHaveURL(/inventory/);
  });

  test('Complete checkout successfully', async ({ page }) => {
    const inventory = new InventoryPage(page);
    const cart = new CartPage(page);
    const checkout = new CheckoutPage(page);

    await inventory.addFirstProductToCart();
    await inventory.goToCart();

    await cart.proceedToCheckout();

    await checkout.fillCustomerInformation(
      'John',
      'Doe',
      '12345'
    );

    await checkout.finishCheckout();

    await expect(page.locator(checkout.successMessage))
      .toHaveText('Thank you for your order!');
  });

});
