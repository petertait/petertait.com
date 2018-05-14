import React, { Component, PropTypes } from 'react'
import Radium from 'radium'

import { breakpoint } from '../vars'

import SocialButton from './SocialButton'

@Radium
class Social extends Component {
  render() {
    return (
      <div>
        <SocialButton link='mailto:contact@petertait.com' icon='email' />
        <SocialButton link='http://github.com/petertait' icon='github' />
        <SocialButton link='http://twitter.com/peter_tait' icon='twitter' />
      </div>
    )
  }
}

const styles = {
  btn: {
    display: 'inline-block',
    width: '45px',
    height: '45px',
    margin: '0 10px 50px 0',
    border: '0',

    [breakpoint.medium]: {
      margin: '20px 10px 50px 0'
    }
  }
}

export default Social
