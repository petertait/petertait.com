import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import Radium from 'radium'

import { type } from '../vars'

@Radium
class Work extends Component {
  render() {
    return (
      <Link to={this.props.link} style={styles.work}>
        <h2 style={styles.title}>{this.props.title}</h2>
        <p>{this.props.summary}</p>
      </Link>
    )
  }
}

const styles = {
  work: {
    borderBottom: 'none',
    marginBottom: '15px',
    display: 'table',
    cursor: 'not-allowed'
  },
  title: {
    WebkitFontSmoothing: 'antialiased',
    fontFamily: type.fontSans,
    fontSize: type.beta,
    lineHeight: '1.2',
    borderBottom: '1px solid',
    marginBottom: '8px',
    display: 'table'
  }
}

export default Work
