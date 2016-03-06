import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import CSSModules from 'react-css-modules';

import Nav from '../Nav';

import styles from './styles.css';

class Header extends Component {
  render() {
    return (
      <header styleName='header'>
        <div className='container'>
          <Link to='/' className='logo' styleName='logo'>Peter Tait - Designer</Link>
          <Nav/>
        </div>
      </header>
    );
  }
}

export default CSSModules(Header, styles);
