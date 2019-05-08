var chai = require('chai');
var expect = chai.expect; // we are using the "expect" style of Chai
var MediumCoverage = require('./to/MediumCoverage.js');
var FullCoverage = require('./to/FullCoverage.js');
var LowCoverage = require('./to/LowCoverage.js');
var MegaCoverage = require('./to/MegaCoverage.js');
var SpecialFullCoverage = require('./to/SpecialFullCoverage.js');
var SuperSale = require('./to/SuperSale.js');

describe('MediumCoverage', function() {
  it('updateProduct() el precio no disminuira', function() {
    var producto = new MediumCoverage(0,0);
    producto.updateProduct();
    expect(producto.price).to.equal(0);
  });
});

describe('MediumCoverage', function() {
  it('updateProduct() el precio disminuira en 1', function() {
    var producto = new MediumCoverage(2,1);
    producto.updateProduct();
    expect(producto.price).to.equal(0);
  });
});

describe('MediumCoverage', function() {
  it('updateProduct() el precio disminuira en 2', function() {
    var producto = new MediumCoverage(0,3);
    producto.updateProduct();
    expect(producto.price).to.equal(1);
  });
});

describe('FullCoverage', function() {
  it('updateProduct() el precio no aumentara', function() {
    var producto = new FullCoverage(0,50);
    producto.updateProduct();
    expect(producto.price).to.equal(50);
  });
});

describe('FullCoverage', function() {
  it('updateProduct() el precio disminuira en 1', function() {
    var producto = new FullCoverage(2,49);
    producto.updateProduct();
    expect(producto.price).to.equal(50);
  });
});

describe('FullCoverage', function() {
  it('updateProduct() el precio disminuira en 2', function() {
    var producto = new FullCoverage(0,48);
    producto.updateProduct();
    expect(producto.price).to.equal(50);
  });
});

describe('LowCoverage', function() {
  it('updateProduct() el precio no disminuira', function() {
    var producto = new LowCoverage(0,0);
    producto.updateProduct();
    expect(producto.price).to.equal(0);
  });
});

describe('LowCoverage', function() {
  it('updateProduct() el precio disminuira en 1', function() {
    var producto = new LowCoverage(2,1);
    producto.updateProduct();
    expect(producto.price).to.equal(0);
  });
});

describe('LowCoverage', function() {
  it('updateProduct() el precio disminuira en 2', function() {
    var producto = new LowCoverage(0,2);
    producto.updateProduct();
    expect(producto.price).to.equal(0);
  });
});

describe('MegaCoverage', function() {
  it('updateProduct() el precio se mantiene', function() {
    var producto = new MegaCoverage(0,0);
    producto.updateProduct();
    expect(producto.price).to.equal(0);
  });
});

describe('MegaCoverage', function() {
  it('updateProduct() el precio se mantiene', function() {
    var producto = new MegaCoverage(2,1);
    producto.updateProduct();
    expect(producto.price).to.equal(1);
  });
});

describe('MegaCoverage', function() {
  it('updateProduct() el precio se mantiene', function() {
    var producto = new MegaCoverage(0,2);
    producto.updateProduct();
    expect(producto.price).to.equal(2);
  });
});

describe('SpecialFullCoverage', function() {
  it('updateProduct() el precio se mantiene', function() {
    var producto = new SpecialFullCoverage(1,50);
    producto.updateProduct();
    expect(producto.price).to.equal(50);
  });
});

describe('SpecialFullCoverage', function() {
  it('updateProduct() el precio se iguala a 0', function() {
    var producto = new SpecialFullCoverage(0,50);
    producto.updateProduct();
    expect(producto.price).to.equal(0);
  });
});

describe('SpecialFullCoverage', function() {
  it('updateProduct() el precio aumenta en 1', function() {
    var producto = new SpecialFullCoverage(12,49);
    producto.updateProduct();
    expect(producto.price).to.equal(50);
  });
});

describe('SpecialFullCoverage', function() {
  it('updateProduct() el precio aumenta en 2', function() {
    var producto = new SpecialFullCoverage(7,48);
    producto.updateProduct();
    expect(producto.price).to.equal(50);
  });
});

describe('SpecialFullCoverage', function() {
  it('updateProduct() el precio aumenta en 3', function() {
    var producto = new SpecialFullCoverage(3,47);
    producto.updateProduct();
    expect(producto.price).to.equal(50);
  });
});

describe('SuperSale', function() {
  it('updateProduct() el precio no disminuira', function() {
    var producto = new SuperSale(0,0);
    producto.updateProduct();
    expect(producto.price).to.equal(0);
  });
});

describe('SuperSale', function() {
  it('updateProduct() el precio disminuira en 1', function() {
    var producto = new SuperSale(2,1);
    producto.updateProduct();
    expect(producto.price).to.equal(0);
  });
});

describe('SuperSale', function() {
  it('updateProduct() el precio disminuira en 2', function() {
    var producto = new SuperSale(0,2);
    producto.updateProduct();
    expect(producto.price).to.equal(0);
  });
});
