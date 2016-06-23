import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import CSSModules from 'react-css-modules';

import Logo from '../Logo';
import Nav from '../Nav';

import styles from './styles.css';

class Header extends Component {
  render() {
    return (
      <header {...this.props} styleName='header'>
        <div className='container'>
          <Link to='/' styleName='logo'>
            <Logo/>
          </Link>
          <Nav/>
        </div>
      </header>
    );
  }
}

export default CSSModules(Header, styles);
