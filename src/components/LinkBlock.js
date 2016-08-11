import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import Radium from 'radium'

@Radium
class LinkBlock extends Component {
  render() {
    return (
      <span style={[styles[this.props.color], styles[this.props.margin]]}>
        <Link to={this.props.link} style={styles.button}>
          {this.props.linkText} &rarr;
        </Link>
      </span>
    )
  }
}

const styles = {
  button: {
    padding: '10px 15px 12px',
    border: '1px solid'
  },
  white: {
    color: 'white'
  },
  vertical: {
    display: 'table',
    margin: '50px 0 60px',
  }
}

export default LinkBlock
