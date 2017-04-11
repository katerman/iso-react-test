import React, { Component } from 'react';
import { bool } from 'prop-types';

export default class AboutPage extends Component {
  render() {
    const { isMobile } = this.props;

    return (
      <div>
        <h1>AboutPage - {isMobile ? 'mobile' : 'desktop'}</h1>
      </div>
    );
  }
}

AboutPage.propTypes = {
  isMobile: bool,
};
