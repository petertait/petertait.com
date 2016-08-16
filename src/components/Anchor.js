import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import Radium from 'radium'

import { color } from '../vars'

@Radium
class Anchor extends Component {
  render() {
    var link
    if (this.props.type === 'block') {
      link = (
        <a href={this.props.link} style={[styles.block, styles[this.props.color]]} key='1'>
          <span>{this.props.text}</span> &rarr;
        </a>
      )
    } else {
      link = (
        <a href={this.props.link} style={styles.link}>
          <span style={styles.linkInner}>{this.props.text}</span> &rarr;
        </a>
      )
    }
    return (
      <span style={[styles[this.props.color], styles[this.props.margin]]}>
        {link}
      </span>
    )
  }
}

const styles = {
  block: {
    display: 'table',
    padding: '15px 20px',
    borderWidth: '2px',
    borderStyle: 'solid',
    borderColor: 'inherit',
    lineHeight: '1',
    transition: '0.2s background-color',
  },

  link: {
    borderBottom: 'none'
  },
  linkInner: {
    borderBottom: '1px solid'
  },

  white: {
    color: 'white'
  },
  experiments: {
    ':hover': {
      borderColor: color.black,
      backgroundColor: color.black,
      color: color.experiments,
      opacity: 1
    }
  },

  topBottom: {
    display: 'table',
    marginTop: '50px',
    marginBottom: '60px'
  },
  bottom: {
    display: 'table',
    marginBottom: '50px'
  }
}

export default Anchor
