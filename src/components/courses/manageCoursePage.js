"use strict";

var React = require('react');
var Router = require('react-router');
var CourseForm = require('./courseForm');
var Toastr = require('toastr');
var AuthorStore = require('../../stores/authorStore');
var CourseStore = require('../../stores/courseStore');
var CourseActions = require('../../actions/courseActions');

var ManageCoursePage = React.createClass({
  mixins: [
    Router.Navigation
  ],
  getInitialState: function() {
    return {
      authors: [],
      course: {
        id: '',
        title: '',
        author: {
          name: '',
          id: ''
        },
        category: '',
        length: ''
      },
      errors: {},
      dirty: false
    };
  },
  componentWillMount: function() {
    var authors = AuthorStore.getAllAuthors();
    var courseId = this.props.params.id;
    var course = {};

    if(courseId) {
      course = CourseStore.getCourseById(courseId);
    } else {
      course = {
        author: {
          id: authors[0].id,
          name: authors[0].firstName + ' ' + authors[0].lastName
        }
      };
    }

    this.setState({
      authors: authors,
      course: course
    });
  },
  saveCourse: function(event) {
    event.preventDefault();

    if (this.state.course.id) {
      CourseActions.updateCourse(this.state.course);
    } else {
      CourseActions.createCourse(this.state.course);
    }

    this.setState({ dirty: false });

    Toastr.success('Course save correctly.');
    this.transitionTo('courses');
  },
  setCourseState: function(event, newValue) {
    var field = event.target.name;
    var value = event.target.value;

    if(newValue){
      value = newValue;
    }

    this.state.course[field] = value;
    return this.setState({
      course: this.state.course,
      dirty: true
    });
  },
  render: function() {
    return (
      <CourseForm
          onChange={this.setCourseState}
          onSave={this.saveCourse}
          authors={this.state.authors}
          errors={this.state.errors}
          course={this.state.course} />
    );
  }
});

module.exports = ManageCoursePage;
