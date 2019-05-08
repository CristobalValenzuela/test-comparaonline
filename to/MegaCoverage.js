const Product = require('./Product.js');

class MegaCoverage extends Product {
  constructor(sellIn, price) {
    super("Mega Coverage", sellIn, price);
  }
  updateProduct() {}
}

module.exports = MegaCoverage;
