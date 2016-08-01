import React, { Component, PropTypes } from 'react'
import Radium from 'radium'

import { breakpoint } from '../../vars'

import Service from '../../components/Service'

@Radium
class Services extends Component {
  render() {
    return (
      <section style={styles.container}>
        <div className='container'>
          <h3>Services</h3>
          <div style={styles.services}>
            <Service
              image='images/eye.svg'
              title='Print, branding &amp; graphic design'
              summary='Modern design mixed with the theory of traditional graphic design.' />
            <Service
              nthChild='odd'
              image='images/design.svg'
              title='Application &amp; website design'
              summary='User-centered website and application design. Using Agile methods to produce quick and effective results.' />
            <Service
              image='images/code.svg'
              title='Front-end development'
              summary='The entire process from rapid prototyping, visual concepts to a fully functional live product.' />
          </div>
        </div>
      </section>
    )
  }
}

const styles = {
  container: {
    borderTop: '1px solid rgba(255,255,255,0.2)',
    borderBottom: '1px solid rgba(255,255,255,0.2)',
    paddingTop: '40px',
    paddingBottom: '50px',

    [breakpoint.medium]: {
      paddingTop: '50px',
      paddingBottom: '60px'
    }
  },
  services: {
    display: 'flex',
    flexWrap: 'wrap'
  }
}

export default Services
