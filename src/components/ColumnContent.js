import React, { Component, PropTypes } from 'react'
import Radium from 'radium'

import { breakpoint } from '../vars'

@Radium
class ColumnContent extends Component {
  render() {
    return (
      <div style={[styles.content, styles[this.props.columns]]}>
        {this.props.children}
      </div>
    )
  }
}

const styles = {
  two: {
    [breakpoint.medium]: {
      columnCount: '2'
    }
  },
  three: {
    [breakpoint.medium]: {
      columnCount: '3'
    }
  },
  four: {
    [breakpoint.medium]: {
      columnCount: '4'
    }
  }
}

export default ColumnContent
