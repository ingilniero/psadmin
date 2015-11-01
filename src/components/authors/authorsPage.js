"use strict";

var React = require('react');
var Link = require('react-router').Link;
var AuthorStore = require('../../stores/authorStore');
var AuthorActions = require('../../actions/authorActions');
var AuthorsList = require('./authorsList');

var AuthorsPage = React.createClass({
  getInitialState: function() {
    return {
      authors: AuthorStore.getAllAuthors()
    };
  },
  componentDidMount: function() {
    AuthorStore.addChangeListener(this._onChange);
  },
  componendWillUnmount: function() {
    AuthorStore.removeChangeListener(this._onChange);
  },
  _onChange: function() {
    this.setState({ authors: AuthorStore.getAllAuthors() });
  },
  render: function() {
    return (
      <div>
        <h1>Authors</h1>
        <Link to='addAuthor' className='btn btn-success'>Add Author</Link>
        <AuthorsList authors={this.state.authors} />
      </div>
    );
  }
});

module.exports = AuthorsPage;
