import React, { Component, PropTypes } from 'react'
import Radium from 'radium'

import { type, breakpoint, layout } from '../../vars'

@Radium
class Container extends Component {
  render() {
    return (
      <div className='container' style={styles.container}>
        {this.props.children}
      </div>
    )
  }
}

const styles = {
  container: {
    justifyContent: 'space-between',
    paddingBottom: '50px',

    [breakpoint.medium]: {
      display: 'flex'
    }
  }
}

export default Container
