import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import CSSModules from 'react-css-modules'

import Logo from '../../components/Logo'
import Nav from '../../components/Nav'

import styles from './styles.css'

class Header extends Component {
  render() {
    return (
      <header className='container' styleName={'header-' + this.props.primary}>
        <Logo secondary={this.props.secondary}/>
        <Nav secondary={this.props.secondary}/>
      </header>
    )
  }
}

export default CSSModules(Header, styles)
