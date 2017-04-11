import React, { Component } from 'react';
import { bool, string } from 'prop-types';

import Home from './components/home-page/HomePage';
import About from './components/about-page/AboutPage';
import NotFound from './components/404/NotFoundPage';

import {
  StaticRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

export default class App extends Component {
  render() {
    const { isMobile } = this.props;
    const context = {};
console.log(this.props);
    return (
      <Router context={context} location={this.props.location}>
        <div>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
          </ul>

          <hr/>

          <Switch>
            <Route
              exact
              path="/about"
              render={() => (
                  <About {...this.props} />
                )
              }
            />

            <Route
              exact
              path="/"
              render={() => (
                  <Home {...this.props} />
                )
              }
            />

            <Route component={NotFound} />
          </Switch>

        </div>
      </Router>
    );
  }
}

App.propTypes = {
  isMobile: bool.isRequired,
  location: string.isRequired,
};
