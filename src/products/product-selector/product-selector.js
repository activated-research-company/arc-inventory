require('./product-selector.css');

const m = require('mithril');
const products = require('../products');

function ProductSelector() {
  function GetProductMenu() {
    const vnodes = [];
    Object.keys(products).forEach((product) => {
      vnodes.push(
        m('x-menuitem', { id: `product-${products[product].id}`, product },
          m('x-label', products[product].label)),
      );
    });
    return m('x-menu', vnodes);
  }

  return {
    view: vnode => m('x-select', { ontoggle: vnode.attrs.eventHandler }, GetProductMenu()),
  };
}

module.exports = ProductSelector;
