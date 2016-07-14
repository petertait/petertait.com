import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import Radium from 'radium';

import vars from '../../vars';

import Service from '../../components/Service';

class Works extends Component {
  render() {
    return (
      <section style={styles.container}>
        <div className='container'>
          <h3 style={styles.h3}>Works</h3>
        </div>
      </section>
    )
  }
}

var styles = {
  container: {
    margin: '0',
    padding: '60px 0'
  },
  services: {
    display: 'flex'
  },
  h3: {
    fontWeight: vars.fontRegular,
    fontSize: vars.bodySize,
    marginBottom: '40px'
  }
}

module.exports = Radium(Works);
