"use strict";

var React = require('react');
var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var NotFoundRoute = Router.NotFoundRoute;
var Redirect = Router.Redirect;
var Route = Router.Route;

var App = require('./components/app');
var HomePage = require('./components/homePage');
var AuthorsPage = require('./components/authors/authorsPage');
var CoursesPage = require('./components/courses/coursesPage');
var ManageCoursePage = require('./components/courses/manageCoursePage');
var AboutPage = require('./components/about/aboutPage');
var NotFound = require('./components/notFound');
var ManageAuthorPage = require('./components/authors/manageAuthorPage');

var routes = (
  <Route name='app' path='/' handler={App}>
    <DefaultRoute handler={HomePage} />
    <Route name='authors' handler={AuthorsPage} />
    <Route name='courses' handler={CoursesPage} />
    <Route name='addAuthor' path='author' handler={ManageAuthorPage} />
    <Route name='editAuthor' path='author/:id' handler={ManageAuthorPage} />
    <Route name='addCourse' path='course' handler={ManageCoursePage} />
    <Route name='editCourse' path='course/:id' handler={ManageCoursePage} />
    <Route name='about' handler={AboutPage} />
    <NotFoundRoute handler={NotFound} />
    <Redirect from='about-us' to='about' />
    <Redirect from='about/*' to='about' />
  </Route>
);

module.exports = routes;
