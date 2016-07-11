import React, { Component, PropTypes } from 'react'
import Radium from 'radium'

import Styles from '../../styles'

import Header from '../../components/Header'
import Home from '../../containers/Home'

class App extends Component {
  constructor() {
    super();

    this.state = {
      theme: {}
    }
  }

  render() {
    return (
      <div>
        <Styles/>
        <Header color={this.state.theme.secondary}/>
        {this.props.children}
      </div>
    )
  }
}

module.exports = Radium(App)
