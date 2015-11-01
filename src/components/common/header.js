"use strict";

var React = require('react');

var Header = React.createClass({

  render: function() {
    var styles = {
      height: '100%'
    };

    return (
      <nav className='navbar navbar-default'>
        <div className='container-fluid'>
          <a href='/' className='navbar-brand'>
            <img style={styles} src='images/admin-logo.png' />
          </a>
          <ul className='nav navbar-nav'>
            <li><a href='/'>Home</a></li>
            <li><a href='/#about'>About</a></li>
            <li><a href='/#authors'>Authors</a></li>
          </ul>
        </div>
      </nav>
    );
  }
});

module.exports = Header;
