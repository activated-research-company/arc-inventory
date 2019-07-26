var m = require('mithril');

function PrintButton() {
    return {
        view: vnode => {
            return  m("a", {
                href: "javascript:window.print()",
                target: "_blank"
            },
                m("x-button",
                    m("x-box[vertical]", [
                        m("x-icon", {name: "print"}),
                        m("x-label", "Print Barcodes")
                    ])
                )
            );
        }
    }
}

module.exports = PrintButton;