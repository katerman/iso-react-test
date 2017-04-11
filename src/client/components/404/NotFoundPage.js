import React, { Component } from 'react';
import { bool } from 'prop-types';

export default class NotFoundPage extends Component {
  render() {
    const { isMobile } = this.props;

    return (
      <div>
        <h1>404 not found - {isMobile ? 'mobile' : 'desktop'}</h1>
      </div>
    );
  }
}

NotFoundPage.propTypes = {
  isMobile: bool,
};
