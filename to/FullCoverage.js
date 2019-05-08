const Product = require('./Product.js');

class FullCoverage extends Product {
  constructor(sellIn, price) {
    super("Full Coverage", sellIn, price);
  }
  updateProduct() {
    if(this.price < 50) {
      this.price = this.price + 1;
    }
    this.sellIn = this.sellIn - 1;
    if (this.sellIn < 0 && this.price < 50) {
      this.price = this.price + 1;
    }
  }
}

module.exports = FullCoverage;
