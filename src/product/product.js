require("./product.css");

var m = require('mithril');

function Product() {
    return {
        view: (vnode) => {
            var customAttribute = "";
            if (vnode.attrs.selected) {
                customAttribute = "[selected]";
            }
            return m("x-tab.product" + customAttribute, {id:"product-" + vnode.attrs.value, product: vnode.attrs.value, onclick: vnode.attrs.onclick}, m("x-label", vnode.attrs.label));
        }
    }
}

module.exports = Product;