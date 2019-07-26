require("./barcode-list.css");

var m = require('mithril');
var Barcode = require('./barcode/barcode');

function BarcodeList() {

    function GenerateBarcodeVnodes(barcodeStrategy, barcodeDate, quantity) {
        var barcodes = [];
        // print three per line so make sure quantity is divisible by three
        quantity += (quantity % 3 == 0 ? 0 : 3 - (quantity % 3));
        for (i = 1; i <= quantity; i++) {
            barcodes.push(m(Barcode, {id: `barcode${i}`, value: GenerateBarcode(barcodeStrategy, barcodeDate, i)}));
        }
        return barcodes;
    }
    
    function GenerateBarcode(barcodeStrategy, barcodeDate, sequence) {
        var barcode = barcodeStrategy.strategy;
        barcode = barcode.replace("{year}", GetZeroPaddedString(barcodeDate.getYear() % 100, 2));
        barcode = barcode.replace("{month}", GetZeroPaddedString(barcodeDate.getMonth() + 1, 2));
        barcode = barcode.replace("{day}", GetZeroPaddedString(barcodeDate.getDate(), 2));
        barcode = barcode.replace("{sequence}", GetZeroPaddedString(sequence, 3));
        for (var property in barcodeStrategy) {
            if (barcodeStrategy.hasOwnProperty(property)) {
                barcode = barcode.replace(`{${property}}`, barcodeStrategy[property]);
            }
        }
        return barcode;
    }
    
    function GetZeroPaddedString(string, size) {
        var paddedString = string + "";
        while (paddedString.length < size) {
            paddedString = "0" + paddedString;
        } 
        return paddedString;
    }

    return {
        view: (vnode) => {
            if(vnode.attrs.barcodeStrategy && vnode.attrs.barcodeDate && vnode.attrs.quantity && vnode.attrs.quantity > 0) {
                return m("div.barcode-list.flex-auto.",
                    {id: vnode.attrs.id},
                    GenerateBarcodeVnodes(vnode.attrs.barcodeStrategy,
                        vnode.attrs.barcodeDate,
                        vnode.attrs.quantity));
            } else {
                return null;
            }
        }
    }
}

module.exports = BarcodeList;