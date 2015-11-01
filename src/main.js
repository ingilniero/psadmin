"use strict";

(function(window) {
  window.$ = window.jQuery = require('jquery');
})(window);

var React = require('react');
var HomePage = require('./components/homePage');
var AboutPage = require('./components/about/aboutPage');
var Header = require('./components/common/header');

var App = React.createClass({
  render: function() {
    var Child;

    switch (this.props.route) {
      case 'about':
        Child = AboutPage;
        break;
      default:
        Child = HomePage;
    }

    return (
      <div>
        <Header />
        <Child/>
      </div>
    );
  }
});

function render() {
  var route = window.location.hash.substr(1);
  React.render(<App route={route} />, document.getElementById('app'));
}

window.addEventListener('hashchange', render);
render();
