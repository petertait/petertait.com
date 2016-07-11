import React, { Component, PropTypes } from 'react'

import Header from '../../components/Header'
import Home from '../../containers/Home'

class App extends Component {
  constructor() {
    super();

    this.state = {
      theme : {
        primary: 'purple',
        secondary: 'teal'
      }
    }
  }

  render() {
    return (
      <div>
        <Header color={this.state.theme.secondary}/>
        <Home/>
      </div>
    )
  }
}

export default App
