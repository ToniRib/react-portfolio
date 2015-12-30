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
      <div>
        <div className="trial">Hello!</div>
        <div className="link">This is not a real link</div>
      </div>
    )
  }
})

var routes = (
  <Router history={createBrowserHistory()}>
    <Route path="/" component={App} />
  </Router>
)

// Render the application
ReactDOM.render(routes, document.querySelector('#main'));
