import React, { Component, PropTypes } from 'react'
import { IndexLink } from 'react-router'
import Radium from 'radium'
import Isvg from 'react-inlinesvg'

@Radium
class Logo extends Component {
  render() {
    return (
      <IndexLink style={styles.logo} to="/">
        <Isvg src='../images/logo.svg' />
      </IndexLink>
    )
  }
}

const styles = {
  logo: {
    border: 'none'
  }
}

export default Logo
