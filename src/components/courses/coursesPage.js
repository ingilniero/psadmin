"use strict";

var React = require('react');
var Link = require('react-router').Link;
var CoursesList = require('./coursesList');

var CoursesPage = React.createClass({
  getInitialState: function() {
    return {
      courses: []
    };
  },
  render: function() {
    return (
      <div>
        <h1>Courses</h1>
        <CoursesList courses={this.state.courses} />
      </div>
    );
  }
});

module.exports = CoursesPage;
