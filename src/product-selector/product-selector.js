require("./product-selector.css");

var m = require('mithril');
var Products = require('../products/products')
var Product = require('../product/product');

function ProductSelector() {
    return {
        view: (vnode) => {
            return m("x-tabs.product-selector.mt2", [
                m(Product, {value: Products.ENCLOSURE, label: "Enclosure", selected: vnode.attrs.selected == Products.ENCLOSURE, onclick: vnode.attrs.onclick}),
                m(Product, {value: Products.POLYARC, label: "Polyarc", selected: vnode.attrs.selected == Products.POLYARC, onclick: vnode.attrs.onclick}),
                m(Product, {value: Products.HEATER_CABLE, label: "Heater Cable Assemmbly", selected: vnode.attrs.selected == Products.HEATER_CABLE, onclick: vnode.attrs.onclick})
            ]);
        }
    }
}

module.exports = ProductSelector;