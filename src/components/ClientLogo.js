import React, { Component, PropTypes } from 'react'
import Radium from 'radium'
import Isvg from 'react-inlinesvg'

import { breakpoint } from '../vars'

@Radium
class ClientLogo extends Component {
  render() {
    const url = '../images/work/' + this.props.client + '.svg'
    return (
      <div>
        {this.props.client && <span style={styles.logo}><Isvg src={url} /></span>}
      </div>
    )
  }
}

const styles = {
  logo: {
    display: 'none',

    [breakpoint.medium]: {
      display: 'block',
      padding: '0 60px 40px 0'
    }
  }
}

export default ClientLogo
