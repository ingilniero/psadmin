"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var CourseAPI = require('../api/courseAPI');
var ActionTypes = require('../constants/actionTypes');

var CourseActions = {
  createCourse: function(course) {
    var newCourse = CourseAPI.saveCourse(course);

    Dispatcher.dispatch({
      actionType: ActionTypes.CREATE_COURSE,
      course: newCourse
    });
  }
};

module.exports = CourseActions;
