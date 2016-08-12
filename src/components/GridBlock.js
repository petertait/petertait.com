import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import Radium from 'radium'
import Isvg from 'react-inlinesvg'

import { breakpoint, color, type } from '../vars'

@Radium
class GridBlock extends Component {
  render() {
    const url = 'work/' + this.props.url
    return (
      <div key='1' style={[styles.block, styles[this.props.nthChild]]}>
        <div key='2' style={[styles.inner, styles[this.props.color]]}>
          <h2 style={styles.title}>{this.props.title}</h2>
          <span style={styles.client}>{this.props.client}</span>
          <Link style={styles.link} to={url}></Link>
        </div>
      </div>
    )
  }
}

const styles = {
  block: {
    position: 'relative',
    width: 'calc(100% + 2px)',
    left: '-1px',
    verticalAlign: 'top',
    transition: '0.2s transform',

    ':hover': {
      transform: 'scale(0.98)'
    },

    [breakpoint.medium]: {
      left: '0',
      width: '33.33%',
      display: 'inline-block'
    }
  },
  lastChild: {
    marginBottom: '50px'
  },
  inner: {
    margin: '1px',
    backgroundColor: color.blue,
    color: color.white,
    overflow: 'hidden',
    transition: '0.2s'
  },
  link: {
    display: 'block',
    border: 'none',
    position: 'relative',
    height: '320px',
    zIndex: '1',
  },
  title: {
    width: '100%',
    textAlign: 'center',
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    fontSize: type.mega,
    lineHeight: '1',
    padding: '20px'
  },
  client: {
    width: '100%',
    textAlign: 'center',
    position: 'absolute',
    bottom: '20px',
    opacity: '0.6'
  },

  intranet: {
    ':hover': {
      backgroundColor: color.intranet
    }
  },
  education: {
    ':hover': {
      backgroundColor: color.education
    }
  },
  metrik: {
    ':hover': {
      backgroundColor: color.metrik
    }
  },
  people: {
    ':hover': {
      backgroundColor: color.people
    }
  },
  agile: {
    ':hover': {
      color: color.black,
      backgroundColor: color.agile
    }
  },
  express: {
    ':hover': {
      backgroundColor: color.express
    }
  },
  pebble: {
    ':hover': {
      backgroundColor: color.pebble
    }
  },
  blue: {
    ':hover': {
      backgroundColor: color.black
    }
  }
}

export default GridBlock
