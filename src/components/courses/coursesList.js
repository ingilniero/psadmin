"use strict";

var React = require('react');

var CoursesList = React.createClass({
  render: function() {
    var createCourseRow = function(course) {
        return (
          <tr key={course.id}>
            <td>{course.id}</td>
            <td>{course.title}</td>
            <td>{course.author.name}</td>
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
