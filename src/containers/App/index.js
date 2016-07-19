import React, { Component, PropTypes } from 'react'
import reactCxs from 'react-cxs'

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
        <Header/>
        {this.props.children}
        <Footer/>
      </div>
    )
  }
}

export default App
