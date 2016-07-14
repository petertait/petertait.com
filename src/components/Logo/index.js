import React, { Component, PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import Radium from 'radium';
import Isvg from 'react-inlinesvg';

class Logo extends Component {
  render() {
    return (
      <IndexLink style={styles.logo} to="/">
        <Isvg src='../images/logo.svg' />
      </IndexLink>
    );
  }
}

var styles = {
  logo: {

    border: 'none'
  }
}

module.exports = Radium(Logo);
