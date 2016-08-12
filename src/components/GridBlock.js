import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import Radium from 'radium'
import Isvg from 'react-inlinesvg'

import { breakpoint, color, type } from '../vars'

@Radium
class GridBlock extends Component {
  render() {
    const url = 'work/' + this.props.project
    const color = {
      color: this.props.color
    }
    return (
      <div style={[styles.block, styles[this.props.width]]}>
        <div style={[styles.inner, styles[this.props.color]]}>
          <Link style={styles.link} to={url}>
            <h2 style={styles.title}>{this.props.title}</h2>
            <p style={styles.summary}>{this.props.summary}</p>
          </Link>
        </div>
      </div>
    )
  }
}

const styles = {
  block: {
    position: 'relative',
    width: 'calc(100% + 10px)',
    left: '-5px',
    verticalAlign: 'top',
    transition: '0.2s',

    ':hover': {
      transform: 'scale(0.98)'
    },

    [breakpoint.medium]: {
      left: '0',
      width: '33.33%',
      display: 'inline-block'
    }
  },
  inner: {
    margin: '5px',
    color: color.white
  },
  link: {
    display: 'block',
    border: 'none',
    position: 'relative',
    height: '320px',
    overflow: 'hidden',
    padding: '30px 20px',
  },
  title: {
    fontSize: type.mega,
    lineHeight: '1',
    marginBottom: '20px'
  },
  summary: {
    fontSize: type.gamma,
    opacity: '0.6',
    lineHeight: '1.3'
  },

  intranet: {
    backgroundColor: color.intranet
  },
  education: {
    backgroundColor: color.education
  },
  metrik: {
    backgroundColor: color.metrik
  },
  people: {
    backgroundColor: color.people
  },
  agile: {
    color: color.black,
    backgroundColor: color.agile
  },
  express: {
    backgroundColor: color.express
  },
  pebble: {
    backgroundColor: color.pebble
  },
  blue: {
    backgroundColor: color.white,
    color: color.black
  }
}

export default GridBlock
