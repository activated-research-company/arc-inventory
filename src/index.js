require('../node_modules/xel/themes/material.css');
require('../node_modules/tachyons/css/tachyons.min.css');
require('../node_modules/xel/xel.min.js');
require('./index.css');

var m = require("mithril");
var Home = require("./home/home")

m.route(document.body, '/', {
	'/': Home
});
