import React, { Component, PropTypes } from 'react'
import {StyleRoot} from 'radium';

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
      <StyleRoot>
        <Header/>
        {this.props.children}
        <Footer/>
      </StyleRoot>
    )
  }
}

export default App
