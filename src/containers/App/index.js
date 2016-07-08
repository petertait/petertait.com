import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import CSSModules from 'react-css-modules'

import Header from '../../components/Header'

import Vars from '../../vars'
import Styles from './styles.css'

class App extends Component {
  constructor() {
    super();

    this.state = {
      primaryColor : {},
      secondaryColor : {}
    }
  }

  componentWillMount() {
    document.body.style.backgroundColor = Vars.purple
  }

  render() {
    return (
      <div styleName='container'>
        <Header color={this.state.primaryColor}/>
        <Home />
      </div>
    )
  }
}

export default CSSModules(App, Styles)
