import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import Radium from 'radium';

import vars from '../../vars';

class Hero extends Component {
  render() {
    return (
      <div style={styles.hero}>
        <h1 style={styles.h1}>{this.props.headline}</h1>
      </div>
    )
  }
}

var styles = {
  hero: {
    margin: '20px 0 60px'
  },
  h1: {
    fontSize: vars.giga,
    maxWidth: '1000px'
  }
}

module.exports = Radium(Hero);
