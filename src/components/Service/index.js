import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import Radium from 'radium';
import Isvg from 'react-inlinesvg';

import vars from '../../vars';

class Service extends Component {
  render() {
    return (
      <div style={[styles.service, styles[this.props.nthChild]]}>
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

var styles = {
  service: {
    display: 'block',
    width: '100%',

    '@media screen and (min-width: 900px)': {
      display: 'flex',
      width: 'calc(33% - 5px)',
    }
  },
  odd: {
    margin: '20px 0',

    '@media screen and (min-width: 900px)': {
      margin: '0 10px'
    }
  },
  inner: {
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0.06)',
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

module.exports = Radium(Service);
