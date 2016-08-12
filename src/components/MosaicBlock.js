import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import Radium from 'radium'
import Isvg from 'react-inlinesvg'

import { breakpoint, color } from '../vars'

@Radium
class MosaicBlock extends Component {
  render() {
    const icon = '../images/work/' + this.props.project + '.svg'
    const thumb = '../images/work/' + this.props.project + '.jpeg'
    return (
      <div style={[
        styles.block,
        styles[this.props.color],
        styles[this.props.width]
      ]}>
        <Link style={styles.link} to={this.props.link}>
          <img style={styles.thumb} alt='' />
          <div style={styles.content}>
            <h2 style={styles.title}>{this.props.title}</h2>
            <p>{this.props.summary}</p>
          </div>
        </Link>
      </div>
    )
  }
}

const styles = {
  block: {
    transition: '0.2s',

    ':hover': {
      transform: 'scale(1.02)'
    }
  },
  link: {
    border: 'none',
    position: 'relative',
    padding: '20px',
    height: '300px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    position: 'absolute',
  },
  thumb: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: '0',
    left: '0',
    zIndex: '-1'
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
  pink: {

    backgroundColor: color.pink
  },
}

export default MosaicBlock
