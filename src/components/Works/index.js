import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import Radium from 'radium';

import vars from '../../vars';

import Service from '../../components/Service';

class Works extends Component {
  render() {
    return (
      <div style={styles.container}>
        <h3>Works <span style={styles.label}>– case studies coming soon</span></h3>
        <ul style={styles.works}>
          <li>
            <a style={styles.work}><strong style={styles.title}>Global Intranet</strong> Design of a global intranet spanning over 10 languages and 80 thousand users.</a>
          </li>
          <li>
            <a style={styles.work}><strong style={styles.title}>Remote Education Course</strong> Creation of a new way in educating a workforce remotely.</a>
          </li>
          <li>
            <a style={styles.work}><strong style={styles.title}>Metrik</strong> A geometric display typeface built for unique brands.</a>
          </li>
          <li>
            <a style={styles.work}><strong style={styles.title}>Global People Search</strong> An iOS app for searching colleagues within a global corporation.</a>
          </li>
          <li>
            <a style={styles.work}><strong style={styles.title}>Agile Transformation Brand</strong> Rebrand for an innovative digital transformation</a>
          </li>
        </ul>
      </div>
    )
  }
}

var styles = {
  container: {
    paddingTop: '40px',

    '@media screen and (min-width: 900px)': {
      padding: '60px 0'
    }
  },
  works: {
    paddingBottom: '40px',

    '@media screen and (min-width: 900px)': {
      paddingTop: '10px',
      paddingBottom: '0'
    }
  },
  label: {
    opacity: '0.3'
  },
  work: {
    borderBottom: 'none',
    margin: '35px 0',
    display: 'block',
    fontSize: vars.beta,
    cursor: 'not-allowed'
  },
  title: {
    borderBottom: '1px solid',
    display: 'table'
  }
}

module.exports = Radium(Works);
