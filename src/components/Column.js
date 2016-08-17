import React, { Component, PropTypes } from 'react'
import Radium from 'radium'

import { breakpoint, type } from '../vars'

@Radium
class Column extends Component {
  render() {
    return (
      <div style={[styles.column, styles[this.props.width], styles[this.props.display]]}>
        {this.props.title &&
          <h3 style={styles.title}>{this.props.title}</h3>
        }
        {this.props.headline &&
          <h2 style={styles.headline}>{this.props.headline}</h2>
        }
        {this.props.intro &&
          <p style={styles.intro}>{this.props.intro}</p>
        }
        {this.props.content &&
          <div dangerouslySetInnerHTML={{ __html: this.props.content }} />
        }
        {this.props.children}
      </div>
    )
  }
}

const styles = {
  column: {
    paddingLeft: '20px',
    paddingRight: '20px'
  },
  title: {
    width: '100%'
  },
  headline: {
    width: '100%',
    marginBottom: '20px'
  },
  intro: {
    fontSize: type.beta,
    marginBottom: '20px',

    [breakpoint.medium]: {
      fontSize: '30px',
    }
  },
  flex: {
    [breakpoint.medium]: {
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      display: 'flex'
    }
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
  }
}

export default Column
