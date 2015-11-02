"use strict";

var React = require('react');
var Router = require('react-router');
var CourseForm = require('./courseForm');
var Toastr = require('toastr');
var AuthorStore = require('../../stores/authorStore');
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
          name: ''
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
    this.setState({
      authors: authors,
      course: {
        author: {
          name: authors[0].firstName + ' ' + authors[0].lastName
        }
      }
    });
  },
  saveCourse: function(event) {
    event.preventDefault();
    if (this.state.course.id) {
      // update
    } else {
      CourseActions.createCourse(this.state.course);
    }

    this.setState({ dirty: false });

    Toastr.success('Course save correctly.');
    this.transitionTo('courses');
  },
  setCourseState: function(event) {
    var field = event.target.name;
    var value = event.target.value;
    var author;

    if(field === 'author') {
      author = {
        name: value
      };

      value = author;
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
