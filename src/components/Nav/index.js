import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import CSSModules from 'react-css-modules';

import styles from './styles.css';

class Nav extends Component {
  render() {
    return (
      <nav className='container' styleName='nav'>
        <Link to='/blog' styleName='link'>Blog</Link>
      </nav>
    );
  }
}

export default CSSModules(Nav, styles);
