import React, { Component, PropTypes } from 'react'
import Radium from 'radium'
import Isvg from 'react-inlinesvg'

import { breakpoint } from '../vars'

@Radium
class SocialButton extends Component {
  render() {
    const icon = '../images/' + this.props.icon + '.svg'
    return (
      <a style={styles.button} href={this.props.link} target='_blank'><Isvg src={icon} /></a>
    )
  }
}

const styles = {
  button: {
    display: 'inline-block',
    width: '20px',
    height: '20px',
    marginLeft: '0',
    marginRight: '30px',
    border: 'none',

    [breakpoint.medium]: {
      marginLeft: '30px',
      marginRight: '0'
    }
  }
}

export default SocialButton
