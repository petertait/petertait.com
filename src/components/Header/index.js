import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import Radium from 'radium'

import Logo from '../../components/Logo'
import Nav from '../../components/Nav'

class Header extends Component {
  render() {
    return (
      <header
        className='container'
        style={[
          styles.header
        ]}>
        <Logo style={[
          styles.logo,
          styles[this.props.logoColor]
        ]}/>
        <Nav/>
      </header>
    )
  }
}

var styles = {
  header: {
    backgroundColor: '#fff',
  },
  logo: {

  },
  peach: {
    
  }
}

module.exports = Radium(Header);
