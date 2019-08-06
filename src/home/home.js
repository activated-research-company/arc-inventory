require('./home.css');

const m = require('mithril');
const PrintButton = require('../print-button/print-button');
const ProductSelector = require('../products/product-selector/product-selector');
const Products = require('../products/products');
const BarcodeList = require('../barcode-list/barcode-list');

function Home() {
  let selectedProduct;
  let quantity;
  let manufacturingDate;

  function getProductInput() {
    return m(ProductSelector, {
      eventHandler: (event) => {
        selectedProduct = event.target.attributes.product.value;
      },
    });
  }

  function getQuantityInput() {
    return m('x-input.ml2', {
      style: 'width:45px;',
      oninput: (event) => {
        quantity = event.target.value;
      },
    }, m('x-label', 'QTY'));
  }

  function getDateInput() {
    return m('x-dateselect.ml2', {
      oninput: (event) => {
        const dateParts = event.target.value.split('-');
        manufacturingDate = new Date(dateParts[0], dateParts[1] - 1, dateParts[2]);
      },
    }, m('x-label', 'MFG Date'));
  }

  function getBarcodeList() {
    return m(BarcodeList, {
      id: 'barcode-list',
      strategy: selectedProduct ? Products[selectedProduct].barcodeStrategy : '',
      quantity: Number(quantity),
      date: manufacturingDate,
    });
  }

  return {
    view: () => m('div.ma-auto', { style: 'width:8.5in' }, [
      m('h1', { style: 'text-align:center' }, 'ARC Inventory'),
      m('div.pb3.flex.justify-center', m(PrintButton, { class: 'ma-auto' })),
      m('div.pb3.flex.justify-center', [getProductInput(), getQuantityInput(), getDateInput()]),
      getBarcodeList(),
    ]),
  };
}

module.exports = Home;
