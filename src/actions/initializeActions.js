"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require('../constants/actionTypes');
var AuthorAPI = require('../api/authorAPI');
var CourseAPI = require('../api/courseAPI');

var InitializeActions = {
  initApp: function() {
    Dispatcher.dispatch({
      actionType: ActionTypes.INITIALIZE,
      initialData: {
        authors: AuthorAPI.getAllAuthors(),
        courses: CourseAPI.getAllCourses()
      }
    });
  }
};

module.exports = InitializeActions;
