const Product = require('./Product.js');

class SpecialFullCoverage extends Product {
  constructor(sellIn, price) {
    super("Special Full Coverage", sellIn, price);
  }
  updateProduct() {
    if (this.price < 50) {
      this.price = this.price + 1;
      if (this.sellIn < 11 && this.price < 50) {
        this.price = this.price + 1;
      }
      if (this.sellIn < 6 && this.price < 50) {
        this.price = this.price + 1;
      }
    }
    this.sellIn = this.sellIn - 1;
    if (this.sellIn < 0) {
      this.price = 0;
    }
  }
}

module.exports = SpecialFullCoverage;
