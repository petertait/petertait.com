import React, { Component, PropTypes } from 'react';
import Radium from 'radium';

import Logo from '../../components/Logo';
import Nav from '../../components/Nav';

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
    paddingTop: '40px',
    paddingBottom: '20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',

    '@media screen and (min-width: 800px)': {
      paddingBottom: '60px',
    }
  }
}

module.exports = Radium(Header);
