import React, { Component, PropTypes } from 'react'
import Radium from 'radium'

import { breakpoint } from '../vars'

@Radium
class Column extends Component {
  render() {
    return (
      <div style={styles.column}>
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
  }
}

export default Column
