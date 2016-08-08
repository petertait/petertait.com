import React, { Component, PropTypes } from 'react'
import Radium from 'radium'
import Isvg from 'react-inlinesvg'

import { breakpoint, color } from '../vars'

@Radium
class SocialButtons extends Component {
  render() {
    return (
      <div>
        <a key='1' style={styles.btn} href='mailto:contact@petertait.com'>
          <Isvg src='../images/email.svg' />
        </a>
        <a key='2' style={styles.btn} href='http://github.com/petertait' target='_blank'>
          <Isvg src='../images/github.svg' />
        </a>
        <a key='3' style={styles.btn} href='http://twitter.com/peter_tait' target='_blank'>
          <Isvg src='../images/twitter.svg' />
        </a>
      </div>
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

export default SocialButtons
