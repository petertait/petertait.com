import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import Radium from 'radium';

import vars from '../../vars';

class Work extends Component {
  render() {
    return (
      <li>
        <a style={styles.work}>
          <h2 style={styles.title}>{this.props.title}</h2>
          <p>{this.props.summary}</p>
        </a>
      </li>
    )
  }
}

var styles = {
  work: {
    borderBottom: 'none',
    marginBottom: '35px',
    display: 'block',
    cursor: 'not-allowed'
  },
  title: {
    borderBottom: '1px solid',
    fontFamily: vars.fontSans,
    fontSize: vars.beta,
    lineHeight: '1.2',
    marginBottom: '8px',
    display: 'table'
  }
}

module.exports = Radium(Work);
