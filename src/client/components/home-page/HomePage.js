import React, { Component } from 'react';
import { bool } from 'prop-types';

export default class HomePage extends Component {

  constructor(){
    super();

    this.state = {
      clickedAmt: 0
    };

    this.handleBtnClick = this.handleBtnClick.bind(this);
  }

  handleBtnClick() {
    console.log('clicked');
    this.setState({ clickedAmt: this.state.clickedAmt + 1 });
  }

  render() {
    const { isMobile } = this.props;

    return (
      <div>
        <h1>homepage - {isMobile ? 'mobile' : 'desktop'}</h1>
        <button onClick={this.handleBtnClick}>Clicked {this.state.clickedAmt} times</button>
      </div>
    );
  }
}

HomePage.propTypes = {
  isMobile: bool,
};
