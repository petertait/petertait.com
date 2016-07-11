import React, { Component, PropTypes } from 'react';
import Radium from 'radium'
import Isvg from 'react-inlinesvg'

class Logo extends Component {
  render() {
    return (
      <Isvg src='../images/logo.svg' style={styles.logo} />
    );
  }
}

var styles = {
  logo: {

  }
}

module.exports = Radium(Logo)
