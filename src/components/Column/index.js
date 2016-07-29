import React, { Component, PropTypes } from 'react'
import Radium from 'radium'

import { type, breakpoint, layout } from '../../vars'

@Radium
class Column extends Component {
  render() {
    return (
      <div style={[
          styles.column,
          styles[this.props.grid]
        ]}>
        {this.props.children}
      </div>
    )
  }
}

const styles = {
  column: {
    [breakpoint.medium]: {
      width: '50%'
    }
  },
  rightHalf: {
    [breakpoint.medium]: {
      marginRight: '20px',
    }
  },
  leftHalf: {
    [breakpoint.medium]: {
      marginLeft: 0
    }
  }
}

export default Column
