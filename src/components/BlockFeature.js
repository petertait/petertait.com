import React, { Component, PropTypes } from 'react'
import Radium from 'radium'
import Isvg from 'react-inlinesvg'

import { breakpoint } from '../vars'

@Radium
class BlockFeature extends Component {
  render() {
    return (
      <div style={[styles.item, styles[this.props.width], styles[this.props.nthChild]]}>
        <div style={styles.inner}>
          <span style={styles.image}>
            <Isvg src={this.props.image} />
          </span>
          <h2 style={styles.title}>{this.props.title}</h2>
          <p>{this.props.summary}</p>
        </div>
      </div>
    )
  }
}

const styles = {
  item: {
    display: 'block',
    textAlign: 'center',
    width: '100%',
    marginBottom: '20px',

    [breakpoint.medium]: {
      display: 'flex'
    },
  },
  half: {
    [breakpoint.medium]: {
      width: 'calc(50% - 5px)'
    }
  },
  third: {
    [breakpoint.medium]: {
      width: 'calc(33% - 5px)'
    }
  },
  odd: {
    [breakpoint.medium]: {
      marginLeft: '10px',
      marginRight: '10px',
    }
  },
  inner: {
    border: '2px solid rgba(255,255,255, 0.15)',
    padding: '60px 30px 10px'
  },
  image: {
    display: 'block'
  },
  title: {
    marginTop: '50px',
    marginBottom: '15px'
  }
}


export default BlockFeature
