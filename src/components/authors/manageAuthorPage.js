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
  statics: {
    willTransitionFrom: function(transition, component) {
      if(component.state.dirty && !confirm('Leave without saving?')) {
        transition.abort();
      }
    }
  },
  getInitialState: function() {
    return {
      author: {
        id: '',
        firstName: '',
        lastName: ''
      },
      errors: {},
      dirty: false
    };
  },
  setAuthorState: function(event) {
    var field = event.target.name;
    var value = event.target.value;
    this.state.author[field] = value;
    return this.setState({
        author: this.state.author,
        dirty: true
     });
  },
  authorFormIsInvalid: function() {
    var formIsValid = true;
    this.state.error = {}; // Clear any previous errors

    if (this.state.author.firstName.length < 3) {
      this.state.errors.firstName = 'First name must be at least 3 characters.';
      formIsValid = false;
    }

    if (this.state.author.lastName.length < 3) {
      this.state.errors.lastName = 'Last name must be at least 3 characters.';
      formIsValid = false;
    }

    this.setState({ errors: this.state.errors });
    return formIsValid;

  },
  saveAuthor: function(event) {
    event.preventDefault();

    if(!this.authorFormIsInvalid()) {
      return;
    }

    AuthorAPI.saveAuthor(this.state.author);
    this.setState({ dirty: false });

    Toastr.success('Author save correctly.');
    this.transitionTo('authors');
  },
  render: function() {
    return (
      <AuthorForm
          onChange={this.setAuthorState}
          onSave={this.saveAuthor}
          errors={this.state.errors}
          author={this.state.author} />
    );
  }
});

module.exports = ManageAuthorPage;
