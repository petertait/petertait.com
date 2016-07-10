import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import Radium, { Style } from 'radium'

import Home from '../../containers/Home'
import Header from '../../components/Header'

import vars from '../../vars'

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
        <Header primaryColor={this.state.theme.primary} secondaryColor={this.state.theme.secondary}/>
        <Home/>
      </div>
    )
  }
}


<style rules={{
  '*, *::before, *::after': {

  },
  body: {
    margin: 0,
    fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif'
  },
  html: {
    background: '#ccc',
    fontSize: '100%'
  },
  mediaQueries: {
    '(min-width: 550px)': {
      html:  {
        fontSize: '120%'
      }
    },
    '(min-width: 1200px)': {
      html:  {
        fontSize: '140%'
      }
    }
  },
  'h1, h2, h3': {
    fontWeight: 'bold'
  }
}} />

module.exports = Radium(App)
