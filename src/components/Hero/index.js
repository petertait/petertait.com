import React, { Component, PropTypes } from 'react'
import Radium from 'radium'

import vars from '../../vars'

class Hero extends Component {
  render() {
    return (
      <div>
        <h1 style={styles.h1}>{this.props.headline}</h1>
      </div>
    )
  }
}

var styles = {
  h1: {
    fontSize: vars.giga,
    margin: '80px 0',
    maxWidth: '1000px'
  }
}

module.exports = Radium(Hero)
