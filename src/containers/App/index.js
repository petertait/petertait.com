import React, { Component, PropTypes } from 'react'
import Radium from 'radium'

import Styles from '../../styles'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
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
        <Header/>
        {this.props.children}
        <Footer/>
      </div>
    )
  }
}

module.exports = Radium(App)
