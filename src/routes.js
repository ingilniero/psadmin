"use strict";

var React = require('react');
var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;

var App = require('./components/app');
var homePage = require('./components/homePage');
var authorsPage = require('./components/authors/authorsPage');
var aboutPage = require('./components/about/aboutPage');

var routes = (
  <Route name='app' path='/' handler={App}>
    <DefaultRoute handler={homePage} />
    <Route name='authors' handler={authorsPage} />
    <Route name='about' handler={aboutPage} />
  </Route>
);

module.exports = routes;
