import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import CSSModules from 'react-css-modules'

import Header from '../../components/Header'

import vars from '../../vars'
import styles from './styles.css'

class Home extends Component {
  componentWillMount() {
    this.state = {
      theme : {
        primary: vars.purple,
        secondary: vars.teal
      }
    }

    var primary = this.state.theme.primary
    var secondary = this.state.theme.secondary

    console.log(secondary);

    document.body.style.backgroundColor = primary
    document.body.style.color = secondary
  }

  render() {
    return (
      <div styleName='container'>


      </div>
    )
  }
}

export default CSSModules(Home, styles)
