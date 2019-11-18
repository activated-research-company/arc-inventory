require('./barcode-list.css');

const m = require('mithril');
const Barcode = require('./barcode/barcode');

function BarcodeList() {
  function GetZeroPaddedString(value, size) {
    let paddedString = value.toString();
    while (paddedString.length < size) {
      paddedString = `0${paddedString}`;
    }
    return paddedString;
  }

  function GenerateBarcode(strategy, barcodeDate, sequence) {
    let barcode = strategy.strategy;
    barcode = barcode.replace('{fullyear}', barcodeDate.getFullYear());
    barcode = barcode.replace('{year}', GetZeroPaddedString(barcodeDate.getYear() % 100, 2));
    barcode = barcode.replace('{month}', GetZeroPaddedString(barcodeDate.getMonth() + 1, 2));
    barcode = barcode.replace('{day}', GetZeroPaddedString(barcodeDate.getDate(), 2));
    barcode = barcode.replace('{sequence}', sequence);
    Object.keys(strategy).forEach((property) => {
      barcode = barcode.replace(`{${property}}`, strategy[property]);
    });
    return barcode;
  }

  function GetInflowSerialGenerator(strategy, date) {
    const serialGeneratorStrategy = JSON.parse(JSON.stringify(strategy));
    serialGeneratorStrategy.strategy = serialGeneratorStrategy.strategy.replace('{sequence}', '');
    serialGeneratorStrategy.strategy += '\t001';
    return GenerateBarcode(serialGeneratorStrategy, date, 0);
  }

  function GenerateBarcodeVnodes(strategy, date, quantity) {
    const barcodes = [];
    barcodes.push(m(Barcode, {
      id: `barcode${0}`,
      value: GetInflowSerialGenerator(strategy, date),
      text: `scan to generate ${quantity} inflow serials`,
      font: 'Arial',
    }));
    for (let i = 1; i <= quantity; i += 1) {
      barcodes.push(m(Barcode, { id: `barcode${i}`, value: GenerateBarcode(strategy, date, i) }));
    }
    return barcodes;
  }

  return {
    view: (vnode) => {
      if (vnode.attrs.strategy && vnode.attrs.date && vnode.attrs.quantity > 0) {
        return m('div.barcode-list.flex-auto.',
          { id: vnode.attrs.id },
          GenerateBarcodeVnodes(vnode.attrs.strategy,
            vnode.attrs.date,
            vnode.attrs.quantity));
      }
      return null;
    },
  };
}

module.exports = BarcodeList;
