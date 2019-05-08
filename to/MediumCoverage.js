const Product = require('./Product.js');

class MediumCoverage extends Product {
  constructor(sellIn, price) {
    super('Medium Coverage', sellIn, price);
  }
  updateProduct() {
    if (this.price > 0) {
      this.price = this.price - 1;
    }
    this.sellIn = this.sellIn - 1;
    if (this.sellIn < 0 && this.price > 0) {
      this.price = this.price - 1;
    }
  }
}

module.exports = MediumCoverage;
