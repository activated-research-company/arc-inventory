require('../node_modules/xel/themes/material.css');
require('../node_modules/tachyons/css/tachyons.min.css');
require('../node_modules/xel/xel.min.js');
require('./index.css');

const m = require('mithril');
const Home = require('./home/home');

m.route(document.body, '/', {
  '/': Home,
});
