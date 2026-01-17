
export class InventoryPage {
  constructor(page) {
    this.page = page;
    this.inventoryItem = '.inventory_item';
    this.addToCartButton = '[data-test^="add-to-cart"]';
    this.removeButton = '[data-test^="remove"]';
    this.cartIcon = '.shopping_cart_link';
    this.cartBadge = '.shopping_cart_badge';
  }

  async addFirstProductToCart() {
    await this.page.locator(this.addToCartButton).first().click();
  }

  async removeFirstProductFromCart() {
    await this.page.locator(this.removeButton).first().click();
  }

  async goToCart() {
    await this.page.click(this.cartIcon);
  }
}