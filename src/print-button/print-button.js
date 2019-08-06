const m = require('mithril');

function PrintButton() {
  function getPrintIcon() {
    return m('x-icon', { name: 'print' });
  }

  function getPrintLabel() {
    return m('x-label', 'Print Barcodes');
  }

  function getPrintButton() {
    return m('x-button', m('x-box[vertical]', [getPrintIcon(), getPrintLabel()]));
  }

  function getPrintLink() {
    return m('a', { href: 'javascript:window.print()', target: '_blank' }, getPrintButton());
  }

  return {
    view: () => getPrintLink(),
  };
}

module.exports = PrintButton;
