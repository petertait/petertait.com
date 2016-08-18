import React, { Component, PropTypes } from 'react'
import Radium from 'radium'
import Isvg from 'react-inlinesvg'

import { breakpoint } from '../vars'

@Radium
class SocialButton extends Component {
  render() {
    const icon = '../images/' + this.props.icon + '.svg'
    return (
      <a style={styles.btn} href={this.props.link} target='_blank'><Isvg src={icon} /></a>
    )
  }
}

const styles = {
  btn: {
    display: 'inline-block',
    width: '45px',
    height: '45px',
    padding: '9px 12px',
    margin: '0 10px 50px 0',
    border: '1px solid',
    borderRadius: '50%',

    [breakpoint.medium]: {
      margin: '20px 10px 50px 0'
    }
  }
}

export default SocialButton
