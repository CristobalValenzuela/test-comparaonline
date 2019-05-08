const MediumCoverage = require('./to/MediumCoverage.js');
const FullCoverage = require('./to/FullCoverage.js');
const LowCoverage = require('./to/LowCoverage.js');
const MegaCoverage = require('./to/MegaCoverage.js');
const SpecialFullCoverage = require('./to/SpecialFullCoverage.js');
const SuperSale = require('./to/SuperSale.js');
const CarInsurance = require('./bo/CarInsurance.js');

const productsAtDayZero = [
  new MediumCoverage(10, 20),
  new FullCoverage(2, 0),
  new LowCoverage(5, 7),
  new MegaCoverage(0, 80),
  new MegaCoverage(-1, 80),
  new SpecialFullCoverage(15, 20),
  new SpecialFullCoverage(10, 49),
  new SpecialFullCoverage(5, 49),
  new SuperSale(3, 6),
];

const carInsurance = new CarInsurance(productsAtDayZero);
const productPrinter = function(product) {
  console.log(`${product.name}, ${product.sellIn}, ${product.price}`);
};

console.log(`-------- day 0 --------`);
console.log('name, sellIn, price');
carInsurance.products.forEach(productPrinter);
console.log('');

for (let i = 1; i <= 30; i += 1) {
  console.log(`-------- day ${i} --------`);
  console.log('name, sellIn, price');
  carInsurance.updatePrice().forEach(productPrinter);
  console.log('');
}
