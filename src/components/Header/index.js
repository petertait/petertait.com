import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import CSSModules from 'react-css-modules'

import Logo from '../../components/Logo'

import Styles from './styles.css'

class Header extends Component {

  render() {
    return (
      <header className='container' styleName={this.props.color}>
        <Logo color={this.props.color}/>
        <nav styleName='nav'>
          <Link to="/">Profile</Link>
          <Link to="/">Work</Link>
        </nav>
      </header>
    )
  }
}

export default CSSModules(Header, Styles)
