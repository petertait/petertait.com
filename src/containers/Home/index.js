import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import Radium from 'radium'

import vars from '../../vars'

class Home extends Component {
  componentWillMount() {
    this.state = {
      theme: {
        primary: vars.purple,
        secondary: vars.teal
      }
    }

    document.body.style.backgroundColor = this.state.theme.primary
    document.body.style.color = this.state.theme.secondary
  }

  render() {
    return (
      <div></div>
    )
  }
}

module.exports = Radium(Home)
