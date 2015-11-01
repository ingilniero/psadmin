"use strict";

var React = require('react');
var Router = require('react-router');
var AuthorForm = require('./authorForm');
var Toastr = require('toastr');
var AuthorAPI = require('../../api/authorAPI');

var ManageAuthorPage = React.createClass({
  mixins: [
    Router.Navigation
  ],
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

    Toastr.success('Author save correctly.');
    this.transitionTo('authors');
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
