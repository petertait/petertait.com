import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import Radium from 'radium'

import vars from '../../vars'

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

    document.body.style.backgroundColor = primary
    document.body.style.color = secondary
  }

  render() {
    return (
      <div></div>
    )
  }
}

module.exports = Radium(Home)
