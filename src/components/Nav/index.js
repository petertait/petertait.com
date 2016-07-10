import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import CSSModules from 'react-css-modules'

import styles from './styles.css'

class Nav extends Component {

  render() {
    return (
      <nav styleName={'nav-' + this.props.secondary}>
        <Link to="/">Profile</Link>
        <Link to="/">Work</Link>
      </nav>
    )
  }
}

export default CSSModules(Nav, styles)
