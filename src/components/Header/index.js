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
        <Logo color={this.props.secondaryColor}/>
        <Nav/>
      </header>
    )
  }
}

var styles = {
  header: {
    backgroundColor: '#fff'
  }
}

module.exports = Radium(Header)
