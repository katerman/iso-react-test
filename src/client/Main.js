import React, { Component } from 'react';
import { bool, string } from 'prop-types';

import Home from './components/home-page/HomePage';
import About from './components/about-page/AboutPage';

import {
  StaticRouter as Router,
  Route,
  Link
} from 'react-router-dom';

export default class App extends Component {
  render() {
    const { isMobile } = this.props;
    const context = {};

    return (
      <Router context={context} location={this.props.location}>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>

          <hr/>

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
        </div>
      </Router>
    );
  }
}

App.propTypes = {
  isMobile: bool.isRequired,
  location: string.isRequired,
};
