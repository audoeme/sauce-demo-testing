export class CartPage {
  constructor(page) {
    this.page = page;
    this.cartItem = '.cart_item';
    this.checkoutButton = '[data-test="checkout"]';
  }

  async proceedToCheckout() {
    await this.page.click(this.checkoutButton);
  }
}