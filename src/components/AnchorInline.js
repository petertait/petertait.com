import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import Radium from 'radium'

@Radium
class AnchorInline extends Component {
  render() {
    return (
      <span style={[styles[this.props.color], styles[this.props.margin]]}>
        <a href={this.props.link} style={styles.button}>
          <span style={styles.content}>{this.props.linkText}</span> &rarr;
        </a>
      </span>
    )
  }
}

const styles = {
  button: {
    borderBottom: 'none'
  },
  content: {
    borderBottom: '1px solid'
  },
  white: {
    color: 'white'
  },
  vertical: {
    display: 'table',
    margin: '50px 0 60px'
  }
}

export default AnchorInline
