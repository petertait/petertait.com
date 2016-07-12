import React, { Component, PropTypes } from 'react'
import Radium from 'radium'

import Logo from '../../components/Logo'
import Nav from '../../components/Nav'
import HireBtn from '../../components/HireBtn'

class Header extends Component {
  render() {
    return (
      <header className='container' style={styles.header}>
        <Logo/>
        <Nav/>
        <div style={styles.contact}>
          <ul style={styles.details}>
            <li>Peter Tait</li>
            <li>
              <a href="tel:+4407598276618">+44 07598 276618</a>
            </li>
            <li>
              <a href="mailto:contact@petertait.com">contact@petertait.com</a>
            </li>
          </ul>
          <HireBtn/>
        </div>
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
