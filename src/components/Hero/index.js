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

const styles = {
  hero: {
    margin: '20px 0 40px',

    '@media screen and (min-width: 800px)': {
      marginBottom: '60px',
    }
  },
  h1: {
    fontSize: vars.alpha,
    maxWidth: '1000px',

    '@media screen and (min-width: 600px)': {
      fontSize: vars.mega
    },
    '@media screen and (min-width: 800px)': {
      fontSize: vars.giga
    }
  }
}

module.exports = Radium(Hero);
