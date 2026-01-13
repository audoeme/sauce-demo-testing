import { test, expect } from '@playwright/test';
import { LoginPage } from '../src/pages/LoginPage';

test.describe('Login', () => {

  test('Login com sucesso', async ({ page }) => {
    const login = new LoginPage(page);

    await login.goto();
    await login.login('standard_user', 'secret_sauce');

    await expect(page).toHaveURL(/inventory/);
  });

  test('Login inválido', async ({ page }) => {
    const login = new LoginPage(page);

    await login.goto();
    await login.login('user_invalido', 'senha_errada');

    await expect(page.locator(login.errorMessage))
      .toContainText('Epic sadface');
  });
});