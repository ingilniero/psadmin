"use strict";

var React = require('react');
var AuthorAPI = require('../../api/authorAPI');
var AuthorsList = require('./authorsList');

var AuthorsPage = React.createClass({
  getInitialState: function() {
    return {
      authors: []
    };
  },
  componentDidMount: function() {
    if(this.isMounted()) {
      this.setState({
        authors: AuthorAPI.getAllAuthors()
      });
    }
  },
  render: function() {
    return (
      <div>
        <h1>Authors</h1>
        <AuthorsList authors={this.state.authors} />
      </div>
    );
  }
});

module.exports = AuthorsPage;
