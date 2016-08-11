import React, { Component, PropTypes } from 'react'
import Radium from 'radium'

import { breakpoint } from '../vars'

@Radium
class Column extends Component {
  render() {
    return (
      <div style={[styles.column, styles[this.props.width]]}>
        {this.props.headline && <h2 style={styles.headline}>{this.props.headline}</h2>}
        {this.props.children}
      </div>
    )
  }
}

const styles = {
  column: {
    paddingLeft: '20px',
    paddingRight: '20px',
  },
  full: {
    [breakpoint.medium]: {
      width: '100%'
    }
  },
  half: {
    [breakpoint.medium]: {
      width: '50%'
    }
  },
  third: {
    [breakpoint.medium]: {
      width: '33.33%'
    }
  },
  twoThird: {
    [breakpoint.medium]: {
      width: '66.66%'
    }
  },
  headline: {
    marginBottom: '30px',

    [breakpoint.medium]: {
      marginBottom: '0'
    }
  }
}

export default Column
