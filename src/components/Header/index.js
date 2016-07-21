import React, { Component, PropTypes } from 'react'
import Radium from 'radium'
import { breakpoint, layout } from '../../vars'

import Logo from '../../components/Logo'
import Nav from '../../components/Nav'

@Radium
class Header extends Component {
  render() {
    return (
      <header style={styles.header}>
        <Logo/>
        <Nav/>
      </header>
    )
  }
}

const styles = {
  header: {
    margin: 'auto',
    maxWidth: layout.maxWidth,
    padding: '40px 20px 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',

    [breakpoint.medium]: {
      paddingLeft: layout.gutter,
      paddingRight: layout.gutter,
      paddingBottom: '60px'
    }
  }
}

export default Header
