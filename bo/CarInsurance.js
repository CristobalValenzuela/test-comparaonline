class CarInsurance {
  constructor(products = []) {
    this.products = products;
  }
  updatePrice() {
    for (var i = 0; i < this.products.length; i++) {
      this.products[i].updateProduct();
    }
    return this.products;
  }
}

module.exports = CarInsurance;
