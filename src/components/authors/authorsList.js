"use strict";

var React = require('react');
var Link = require('react-router').Link;
var Toastr = require('toastr');
var AuthorActions = require('../../actions/authorActions');

var AuthorsList = React.createClass({
  propTypes: {
    authors: React.PropTypes.array.isRequired
  },
  deleteAuthor: function(id, event) {
    event.preventDefault();
    AuthorActions.deleteAuthor(id);
    Toastr.success('Author deleted.');
  },
  render: function() {

    var createAuthorRow = function(author) {
      return (
        <tr key={author.id}>
          <td><a href='#' onClick={this.deleteAuthor.bind(this, author.id)}>Delete</a></td>
          <td><Link to='editAuthor' params={ {id: author.id} }>{author.id}</Link></td>
          <td>{author.firstName} {author.lastName}</td>
        </tr>
      );
    };

    return (
      <table className='table'>
        <thead>
          <th></th>
          <th>ID</th>
          <th>Name</th>
        </thead>
        <tbody>
          {this.props.authors.map(createAuthorRow, this)}
        </tbody>
      </table>
    );
  }
});

module.exports = AuthorsList;
