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
        <div class="row">
          <img class="img-responsive center-block main-img" src="build/images/toni_rib_header_v2.svg" alt="toni rib logo" />
        </div>
        < NavBar />
      </header>
    )
  }
});

var PortfolioEntry = React.createClass({
  render: function() {
    return (
      <div class="col-md-4 col-sm-4 col-xs-12">
        <a data-toggle="modal" data-target="#portfolio-modal">
          <div class="box" id="portfolio-site">
            <span class="portfolio-text" id="portfolio-site-text">Udacity Project 1:<br />Portfolio Site</span>
            <img class="portfolio-image png-img" src="img/udacity-portfolio-site.png" alt="TR key logo" />
          </div>
        </a>
      </div>
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
