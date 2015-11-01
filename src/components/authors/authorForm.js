"use strict";

var React = require('react');
var TextInput = require('../common/textInput');

var AuthorForm = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Manage Author</h1>
        <form>
          <TextInput
              name='firstName'
              placeholder='First Name'
              value={this.props.author.firstName}
              onChange={this.props.onChange}
          />
          <TextInput
              name='lastName'
              placeholder='Last Name'
              value={this.props.author.lastName}
              onChange={this.props.onChange} />
          <input
              type='submit'
              value='Save'
              onClick={this.props.onSave}
              className='btn btn-success' />
        </form>
      </div>
    );
  }
});

module.exports = AuthorForm;
