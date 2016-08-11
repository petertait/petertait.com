import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import Radium from 'radium'

import { breakpoint } from '../vars'

@Radium
class Nav extends Component {
  render() {
    const active = { borderBottom: '1px solid' }
    return (
      <nav style={styles.nav}>
        <span style={styles.link}>
          <Link style={styles.inner}  to="/work" activeStyle={active}>Work</Link>
        </span>
        <span style={styles.link}>
          <Link style={styles.inner} to="/about" activeStyle={active}>About</Link>
        </span>
        <span style={styles.link}>
          <Link style={styles.inner} to="/contact" activeStyle={active}>Contact</Link>
        </span>
      </nav>
    )
  }
}

const styles = {
  nav: {
    justifyContent: 'flex-end'
  },
  link: {
    marginLeft: '20px',

    [breakpoint.medium]: {
      marginLeft: '40px'
    }
  },
  inner: {
    borderBottom: 'none',
  }
}

export default Nav
