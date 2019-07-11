require("./barcode.css");

var m = require('mithril');
var JsBarcode = require('jsbarcode');

var Barcode = {
    oncreate: (vnode) => {
        JsBarcode("#" + vnode.attrs.id, vnode.attrs.value);
    },
    onupdate: (vnode) => {
        JsBarcode("#" + vnode.attrs.id, vnode.attrs.value);
    },
	view: (vnode) => {
        return m("canvas.w-30.mr2.ml2.mt2.mb2", {id: vnode.attrs.id});
    }
}

module.exports = Barcode;