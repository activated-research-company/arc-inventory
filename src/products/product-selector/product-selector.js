require('./product-selector.css');

var m = require('mithril');
var Products = require('../products')

function ProductSelector() {

    function GetProductVnodes(products) {
        let vnodes = []
        for (var product in products) {
            vnodes.push(
                m("x-menuitem",
                    {
                        id:"product-" + products[product].id,
                        product: product,
                    }, m("x-label", products[product].label)
                )
            );
        }
        return vnodes;
    }

    return {
        view: vnode => {
            return m("x-select" + (vnode.attrs.class ? "." + vnode.attrs.class : ""), {
                ontoggle: vnode.attrs.eventHandler
            }, m("x-menu", GetProductVnodes(Products)));
        }
    }

}

module.exports = ProductSelector;