import React, { Component } from 'react';
import { bool } from 'prop-types';

export default class HomePage extends Component {
  render() {
    const { isMobile } = this.props;

    return (
      <div>
        <h1>homepage - {isMobile ? 'mobile' : 'desktop'}</h1>
      </div>
    );
  }
}

HomePage.propTypes = {
  isMobile: bool,
};
