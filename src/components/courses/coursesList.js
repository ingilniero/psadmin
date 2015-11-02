"use strict";

var React = require('react');
var Link = require('react-router').Link;

var CoursesList = React.createClass({
  render: function() {
    var createCourseRow = function(course) {
        return (
          <tr key={course.id}>
            <td><Link to='editCourse' params={ { id: course.id } }>{course.id}</Link></td>
            <td><Link to='editCourse' params={ { id: course.id } }>{course.title}</Link></td>
            <td><Link to='editAuthor' params={ { id: course.author.id } }>{course.author.name}</Link></td>
            <td>{course.length}</td>
            <td>{course.category}</td>
          </tr>
        );
    };

    return (
      <table className='table'>
        <thead>
          <th>ID</th>
          <th>Title</th>
          <th>Author</th>
          <th>Duration</th>
          <th>Category</th>
        </thead>
        <tbody>
          {this.props.courses.map(createCourseRow, this)}
        </tbody>
      </table>
    );
  }
});

module.exports = CoursesList;
