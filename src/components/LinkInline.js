import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import Radium from 'radium'

@Radium
class LinkInline extends Component {
  render() {
    return (
      <Link to={this.props.link} style={styles.button}>
        <span style={styles.content}>{this.props.linkText}</span> &rarr;
      </Link>
    )
  }
}

const styles = {
  button: {
    borderBottom: 'none'
  },
  content: {
    borderBottom: '1px solid'
  }
}

export default LinkInline
