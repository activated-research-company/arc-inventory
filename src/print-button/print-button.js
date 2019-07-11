require('./print-button.css');

var m = require('mithril');

function PrintButton() {
    return {
        view: (vnode) => {
            return  m("a", {href: "javascript:window.print()", target: "_blank"}, m("x-button.print-button", m("x-box", [
                m("x-icon", {name: "print"}),
                m("x-label", "Print")
            ])));
        }
    }
}

module.exports = PrintButton;