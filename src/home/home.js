require('./home.css');

var Products = require('../products/products');
var ProductSelector = require('../product-selector/product-selector');
var PrintButton = require('../print-button/print-button');
var BarcodeList = require('../barcode-list/barcode-list');
var m = require('mithril');

function Home() {

    var selectedProduct = Products.ENCLOSURE;

    function SetSelectedProduct(event) {
        selectedProduct = event.target.attributes.product.value;
    }

    return {
        view: (vnode) => {
            return m("div", [
                m("div.ph1.mb4",
                    m("header.flex.mt1.mb1 center"),
                    m("h1.tc.f4.mv0", "ARC Inventory"),
                ),
                m(PrintButton),
                m(ProductSelector, {selected: selectedProduct, onclick: SetSelectedProduct}),
                m(BarcodeList, {id: "barcode-list", product: selectedProduct})
            ]);
        }
    }
}

module.exports = Home;