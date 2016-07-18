import React, { Component, PropTypes } from 'react';

import Logo from '../../components/Logo';
import Nav from '../../components/Nav';

const Header = () => {
  const header = {
    paddingTop: '40px',
    paddingBottom: '20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',

    '@media screen and (min-width: 800px)': {
      paddingBottom: '60px',
    }
  }

  return (
    <header className='container'>
      <div className={header}>
        <Logo/>
        <Nav/>
      </div>
    </header>
  )
}

export default Header
