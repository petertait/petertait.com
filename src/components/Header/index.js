import React, { Component, PropTypes } from 'react'
import Radium from 'radium'
import { breakpoint, layout } from '../../vars'

import Logo from '../../components/Logo'
import Nav from '../../components/Nav'

@Radium
class Header extends Component {
  render() {
    return (
      <header className='container' style={styles.header}>
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
    paddingTop: '40px',
    paddingBottom: '20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',

    [breakpoint.medium]: {
      paddingBottom: '60px'
    }
  }
}

export default Header
