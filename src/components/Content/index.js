import React, { Component, PropTypes } from 'react'
import Radium from 'radium'
import { type, breakpoint, layout } from '../../vars'

@Radium
class Content extends Component {
  render() {
    return (
      <div style={styles.container}>
        <div style={styles.column}>
          <h3 style={styles.title}>{this.props.title}</h3>
        </div>
        <div style={styles.column}>
          <div dangerouslySetInnerHTML={{ __html: this.props.html }} />
        </div>
      </div>
    )
  }
}

const styles = {
  container: {
    justifyContent: 'space-between',
    paddingRight: '20px',
    paddingLeft: '20px',
    paddingBottom: '50px',
    margin: 'auto',
    maxWidth: layout.maxWidth,

    [breakpoint.medium]: {
      paddingLeft: layout.gutter,
      paddingRight: layout.gutter,
      display: 'flex'
    }
  },
  column: {
    [breakpoint.medium]: {
      width: '50%',
      marginRight: '20px',

      ':nthChild(even)': {
        marginRight: '20px',
        marginLeft: 0
      }
    }
  },
  title: {
    fontWeight: type.fontRegular,
    fontSize: type.bodySize,
    marginBottom: '40px'
  }
}

export default Content
