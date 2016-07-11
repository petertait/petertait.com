import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import Radium from 'radium'

class Nav extends Component {
  render() {
    return (
      <nav style={styles.nav}>
        <Link style={styles.link} to="/">Profile</Link>
        <Link style={styles.link} to="/work">Work</Link>
      </nav>
    )
  }
}

var styles = {
  nav: {

  },
  link: {
    marginLeft: '50px',
    border: 'none'
  }
}

module.exports = Radium(Nav)
