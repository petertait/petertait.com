import React, { Component, PropTypes } from 'react'
import Radium from 'radium'

import Logo from '../../components/Logo'
import Nav from '../../components/Nav'

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

var styles = {
  header: {
    paddingTop: '30px',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
}

module.exports = Radium(Header)
