import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import Radium from 'radium';

import Button from '../../components/Button';

class Nav extends Component {
  render() {
    return (
      <nav style={styles.nav}>
        <Link style={styles.link} to="/about">About</Link>
      </nav>
    )
  }
}

var styles = {
  nav: {
    justifyContent: 'flex-end'
  },
  link: {
    marginLeft: '50px',
    border: 'none'
  },
  active: {
    padding: '10px 15px 12px',
    border: 'none',
    backgroundColor: 'rgba(0,0,0,0.08)'
  }
}

module.exports = Radium(Nav);
