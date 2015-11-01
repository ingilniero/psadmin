"use strict";

var React = require('react');

var AuthorsList = React.createClass({
  createAuthorRow: function(author) {
    return (
      <tr key={author.id}>
        <td><a href={'/#authors/' + author.id}>{author.id}</a></td>
        <td>{author.firstName} {author.lastName}</td>
      </tr>
    );
  },
  render: function() {
    return (
      <table className='table'>
        <thead>
          <th>ID</th>
          <th>Name</th>
        </thead>
        <tbody>
          {this.props.authors.map(this.createAuthorRow, this)}
        </tbody>
      </table>
    );
  }
});

module.exports = AuthorsList;
