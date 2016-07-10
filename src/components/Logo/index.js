import React, { Component, PropTypes } from 'react';
import Radium from 'radium'
import Isvg from 'react-inlinesvg'

import vars from '../../vars'

class Logo extends Component {

  render() {
    return (
      <Isvg src='../images/logo.svg'
        color={[
        styles.logo,
        styles[this.props.secondaryColor]
      ]}/>
    );
  }
}

var styles = {
  logo: {},
  teal: {
    color: vars.teal
  }
}

module.exports = Radium(Logo)
