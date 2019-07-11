require("./barcode-list.css");

var m = require('mithril');
var Barcode = require('../barcode/barcode');
var BarcodeStrategies = require('../barcode-strategies/barcode-strategies')

function GenerateBarcodeVnodes(barcodeStrategy, startingSequence, endingSequence) {
    var barcodes = [];
    for (i = startingSequence ; i <= endingSequence ; i++) {
        barcodes.push(m(Barcode, {id: `barcode${i}`, value: GenerateBarcode(barcodeStrategy, i)}));
    }
    return barcodes;
}

function GenerateBarcode(barcodeStrategy, sequence) {
    var barcode = barcodeStrategy.strategy;
    if(barcodeStrategy.sequence) {
        barcode = barcode.replace("{sequence}", GetZeroPaddedString(sequence, barcodeStrategy.sequence))
    }
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

function BarcodeList() {
    return {
        view: (vnode) => {
            return m("div.barcode-list.flex-auto.", {id: vnode.attrs.id}, GenerateBarcodeVnodes(BarcodeStrategies[vnode.attrs.product], 1, 75));
        }
    }
}

module.exports = BarcodeList;