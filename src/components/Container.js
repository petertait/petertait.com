import React, { Component, PropTypes } from 'react'
import Radium from 'radium'

import { breakpoint, layout } from '../vars'

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
    maxWidth: layout.maxWidth,
    width: '100%',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingLeft: '0',
    paddingRight: '0',
    paddingBottom: '30px',
    position: 'relative',
    margin: 'auto',

    [breakpoint.medium]: {
      display: 'flex'
    },
    [breakpoint.small]: {
      paddingLeft: layout.gutter,
      paddingRight: layout.gutter,
    }
  }
}

export default Container
