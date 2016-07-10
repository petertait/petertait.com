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
        primary: 'purple',
        secondary: 'teal'
      }
    }

    document.body.style.backgroundColor = vars.purple
  }

  render() {
    return (
      <div styleName='container'>


      </div>
    )
  }
}

export default CSSModules(Home, styles)
