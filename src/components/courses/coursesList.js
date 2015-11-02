"use strict";

var React = require('react');
var Link = require('react-router').Link;
var Toastr = require('toastr');
var CourseActions = require('../../actions/courseActions');

var CoursesList = React.createClass({
  propTypes: {
    courses: React.PropTypes.array.isRequired
  },
  deleteCourse: function(id, event) {
    event.preventDefault();
    CourseActions.deleteCourse(id);
    Toastr.success('Course deleted.');
  },
  render: function() {
    var createCourseRow = function(course) {
        return (
          <tr key={course.id}>
            <td><a href='#' onClick={this.deleteCourse.bind(this, course.id)}>Delete</a></td>
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
          <th>Delete</th>
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
