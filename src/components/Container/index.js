import React, { Component, PropTypes } from 'react'
import Radium from 'radium'

import { breakpoint } from '../../vars'

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
    padding: '0 20px 50px',

    [breakpoint.medium]: {
      display: 'flex'
    },
    [breakpoint.small]: {
      padding: '0 40px 50px'
    }
  }
}

export default Container
