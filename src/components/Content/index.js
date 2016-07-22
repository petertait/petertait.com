import React, { Component, PropTypes } from 'react'
import Radium from 'radium'
import { type, breakpoint, layout } from '../../vars'

@Radium
class Content extends Component {
  render() {
    return (
      <div style={styles.container}>
        <div style={styles.left}>
          <h3>{this.props.title}</h3>
        </div>
        <div style={styles.right}>
          <div dangerouslySetInnerHTML={{ __html: this.props.html }} />
        </div>
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
  },
  left: {
    [breakpoint.medium]: {
      width: '50%',
      marginRight: '20px',
    }
  },
  right: {
    [breakpoint.medium]: {
      width: '50%',
      marginLeft: 0
    }
  }
}

export default Content
