import React, { Component, PropTypes } from 'react'
import Radium from 'radium'
import Isvg from 'react-inlinesvg'

import { breakpoint, color } from '../vars'

@Radium
class SocialButtons extends Component {
  render() {
    return (
      <div style={styles.container}>
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
  container: {
    justifyContent: 'flex-end'
  },
  btn: {
    display: 'inline-block',
    width: '45px',
    height: '45px',
    padding: '12px',
    margin: '0 10px 50px 0',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: color.grey,
    color: color.black,
    borderRadius: '50%',
    transition: '0.2s',

    ':hover': {
      borderColor: color.black,
      backgroundColor: color.black,
      color: color.white,
      opacity: '1'
    }
  }
}

export default SocialButtons
