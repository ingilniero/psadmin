"use strict";

var React = require('react');
var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;

var App = require('./components/app');
var HomePage = require('./components/homePage');
var AuthorsPage = require('./components/authors/authorsPage');
var AboutPage = require('./components/about/aboutPage');

var routes = (
  <Route name='app' path='/' handler={App}>
    <DefaultRoute handler={HomePage} />
    <Route name='authors' handler={AuthorsPage} />
    <Route name='about' handler={AboutPage} />
  </Route>
);

module.exports = routes;
