require('./home.css');

var PrintButton = require('../print-button/print-button');
var ProductSelector = require('../products/product-selector/product-selector');
var Products = require('../products/products');
var BarcodeList = require('../barcode-list/barcode-list');
var m = require('mithril');

function Home() {

    var selectedProduct;
    var quantity;
    var manufacturingDate;

    return {
        view: vnode => {
            return m("div.ma-auto", {style:"width:8.5in"}, [
                m("h1", {style:"text-align:center"}, "ARC Inventory"),
                m("div.pb3.flex.justify-center", m(PrintButton, {class: "ma-auto"})),
                m("div.pb3.flex.justify-center",[
                    m(ProductSelector, {
                        eventHandler: event => selectedProduct = event.target.attributes.product.value
                    }),
                    m("x-input.ml2", {
                        style:"width:45px;",
                        oninput: event => quantity = event.target.value
                    }, m("x-label", "QTY")),
                    m("x-dateselect.ml2", {
                        oninput: event => {
                            let dateParts = event.target.value.split("-")
                            manufacturingDate = new Date(dateParts[0], dateParts[1] - 1, dateParts[2]);
                        },
                    }, m("x-label", "MFG Date"))
                ]),
                m(BarcodeList, {
                    id: "barcode-list",
                    barcodeStrategy: selectedProduct ? Products[selectedProduct].barcodeStrategy : "",
                    quantity: Number(quantity),
                    barcodeDate: manufacturingDate
                })
            ]);
        }
    }
}

module.exports = Home;