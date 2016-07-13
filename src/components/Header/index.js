import React, { Component, PropTypes } from 'react';
import Radium from 'radium';

import Logo from '../../components/Logo';
import Nav from '../../components/Nav';
import Subheader from '../../components/Subheader';

class Header extends Component {
  render() {
    return (
      <header className='container' style={styles.header}>
        <Logo/>
        <Nav/>
        <Subheader/>
      </header>
    )
  }
}

var styles = {
  header: {
    paddingTop: '30px',
    display: 'flex',
    flexFlow: 'row wrap',
    alignItems: 'center'
  }
}

module.exports = Radium(Header);
