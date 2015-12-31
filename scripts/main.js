// Require React
var React = require('react');
var ReactDOM = require('react-dom');

// Require CSS Transition Group
var CSSTransitionGroup = require('react-addons-css-transition-group');
var ReactRouter = require('react-router');

// Require ReactRouter
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Navigation = ReactRouter.Navigation;
var History = ReactRouter.History;
var createBrowserHistory = require('history/lib/createBrowserHistory');

// Require the helpers
var h = require('./helpers');

var App = React.createClass({
  render: function() {
    return (
      < Header />
    )
  }
});

var NavBar = React.createClass({
  render: function() {
    return(
      <div class="row">
        <nav>
          <a id="bio-link" href="#bio-title">Bio</a>
          <a id="portfolio-link" href="#portfolio-title">Portfolio</a>
          <a id="contact-link" href="#contact-title">Contact</a>
        </nav>
      </div>
    )
  }
});

var Header = React.createClass({
  render: function() {
    return (
      <header>
        <img src="build/images/toni_rib_header_v2.svg" alt="toni rib logo" />
        < NavBar />
      </header>
    )
  }
});

var routes = (
  <Router history={createBrowserHistory()}>
    <Route path="/" component={App} />
  </Router>
)

// Render the application
ReactDOM.render(routes, document.querySelector('#main'));
