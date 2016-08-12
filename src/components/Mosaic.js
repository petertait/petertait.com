import React, { Component, PropTypes } from 'react'
import Radium from 'radium'

import { breakpoint } from '../vars'

@Radium
class Mosaic extends Component {
  render() {
    return (
      <div className='container' style={styles.mosaic}>
        <h3>{this.props.title}</h3>
        {this.props.children}
      </div>
    )
  }
}

const styles = {
  mosaic: {
  	flexDirection: 'column',
  	flexWrap: 'wrap',
  	height: '100vw',
  	fontSize: '0',

    [breakpoint.medium]: {
      display: 'flex'
    }
  }
}

export default Mosaic
