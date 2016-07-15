import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import Radium from 'radium';

import vars from '../../vars';

class Hero extends Component {
  render() {
    return (
      <section className='container'>
        <div style={styles.hero}>
          <h1 style={styles.h1}>{this.props.headline}</h1>
          {this.props.link && <Link to={this.props.link} style={styles.button}>{this.props.linkText}</Link>}
        </div>
      </section>
    )
  }
}

const styles = {
  hero: {
    paddingTop: '40px',
    paddingBottom: '60px',

    '@media screen and (min-width: 800px)': {
      paddingBottom: '100px'
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
    },
  },
  button: {
    display: 'table',
    marginTop: '50px'
  }
}

module.exports = Radium(Hero);
