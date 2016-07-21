import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import Radium from 'radium'

@Radium
class Nav extends Component {
  render() {
    const active = { borderBottom: '1px solid' }
    return (
      <nav style={styles.nav}>
        <Link style={styles.link} to="/about" activeStyle={active}>About</Link>
        <a style={styles.link} href='mailto:contact@petertait.com'>Contact</a>
      </nav>
    )
  }
}

const styles = {
  nav: {
    justifyContent: 'flex-end'
  },
  link: {
    marginLeft: '40px',
    borderBottom: 'none'
  }
}

export default Nav
