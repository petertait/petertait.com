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
            <a style={styles.work}>
              <h2 style={styles.title}>Global Intranet</h2>
              <p>Design of a global intranet spanning over 10 languages and 80 thousand users.</p>
            </a>
          </li>
          <li>
            <a style={styles.work}>
              <h2 style={styles.title}>Remote Education Course</h2>
              <p>Creation of a new way in educating a workforce remotely.</p>
            </a>
          </li>
          <li>
            <a style={styles.work}>
              <h2 style={styles.title}>Metrik</h2>
              <p>A geometric display typeface built for unique brands.</p>
            </a>
          </li>
          <li>
            <a style={styles.work}>
              <h2 style={styles.title}>Global People Search</h2>
              <p>An iOS app for searching colleagues within a global corporation.</p>
            </a>
          </li>
          <li>
            <a style={styles.work}>
              <h2 style={styles.title}>
              Agile Transformation Brand</h2>
              <p>Rebrand for an innovative digital transformation</p>
            </a>
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
      padding: '60px 0 40px'
    }
  },
  works: {
    paddingBottom: '40px',

    '@media screen and (min-width: 900px)': {
      paddingTop: '20px',
      paddingBottom: '0'
    }
  },
  label: {
    opacity: '0.3'
  },
  work: {
    borderBottom: 'none',
    marginBottom: '30px',
    display: 'block',
    cursor: 'not-allowed'
  },
  title: {
    borderBottom: '1px solid',
    fontFamily: vars.fontSans,
    fontSize: vars.beta,
    lineHeight: '1.2',
    marginBottom: '5px',
    display: 'table'
  }
}

module.exports = Radium(Works);
