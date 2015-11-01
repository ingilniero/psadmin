"use strict";

var React = require('react');
var AuthorForm = require('./authorForm');
var AuthorAPI = require('../../api/authorAPI');

var ManageAuthorPage = React.createClass({
  getInitialState: function() {
    return {
      author: {
        id: '',
        firstName: '',
        lastName: ''
      }
    };
  },
  setAuthorState: function(event) {
    var field = event.target.name;
    var value = event.target.value;
    this.state.author[field] = value;
    return this.setState({ author: this.state.author });
  },
  saveAuthor: function(event) {
    event.preventDefault();
    AuthorAPI.saveAuthor(this.state.author);
  },
  render: function() {
    return (
      <AuthorForm
          onChange={this.setAuthorState}
          onSave={this.saveAuthor}
          author={this.state.author} />
    );
  }
});

module.exports = ManageAuthorPage;
