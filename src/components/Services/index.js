import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import Radium from 'radium';

import vars from '../../vars';

import Service from '../../components/Service';

class Services extends Component {
  render() {
    return (
      <section style={styles.container}>
        <div className='container'>
          <h3 style={styles.h3}>Services</h3>
          <ul style={styles.services}>
            <Service
              image='images/eye.svg'
              title='Print, branding &amp; graphic design'
              summary='Modern graphic design with the theory of a traditional print design.' />
            <Service
              nthChild='odd'
              image='images/design.svg'
              title='Application &amp; website Design'
              summary='User-centered website and application design. Using agile methods to product quick and effect results.' />
            <Service
              image='images/code.svg'
              title='Front-end development'
              summary='The entire process from rapid prototyping, visual concepts to a fully functional live website.' />
          </ul>
        </div>
      </section>
    )
  }
}

var styles = {
  container: {
    backgroundColor: 'rgba(0,0,0,0.08)',
    marginTop: '50px',
    padding: '40px 0 50px',

    '@media screen and (min-width: 800px)': {
      marginTop: '80px',
      padding: '60px 0',
    }
  },
  services: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  h3: {
    fontWeight: vars.fontRegular,
    fontSize: vars.bodySize,
    marginBottom: '40px'
  }
}

module.exports = Radium(Services);
