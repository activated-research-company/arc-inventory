require('./barcode.css');

const m = require('mithril');
const JsBarcode = require('jsbarcode');

function Barcode() {
  return {
    oncreate: vnode => JsBarcode(`#${vnode.attrs.id}`, vnode.attrs.value, { text: vnode.attrs.text, font: vnode.attrs.font }),
    onupdate: vnode => JsBarcode(`#${vnode.attrs.id}`, vnode.attrs.value, { text: vnode.attrs.text, font: vnode.attrs.font }),
    view: vnode => m('canvas.barcode', { id: vnode.attrs.id }),
  };
}

module.exports = Barcode;
