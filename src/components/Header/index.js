import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import CSSModules from 'react-css-modules'

import Logo from '../../components/Logo'

import Styles from './styles.css'

class Header extends Component {

  render() {
    return (
      <header styleName='header'>
        <div styleName='inner'>
          <Logo/>
          <nav styleName='nav'>
            <Link to="/">Login</Link>
          </nav>
        </div>
      </header>
    )
  }
}

Header.propTypes = {
  children: PropTypes.node
}

export default CSSModules(Header, Styles)
