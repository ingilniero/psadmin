"use strict";

(function(window) {
  window.$ = window.jQuery = require('jquery');
})(window);

var React = require('react');
var HomePage = require('./components/homePage');

React.render(<HomePage />, document.getElementById('app'));
