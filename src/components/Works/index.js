import React, { Component, PropTypes } from 'react'
import Radium from 'radium'

import { breakpoint, layout, type } from '../../vars'
import Styles from '../../global'
import Work from '../../components/Work'

@Radium
class Works extends Component {
  render() {
    return (
      <div className='container' style={styles.container}>
        <h3>Selected Work <span style={styles.label}>– case studies coming soon</span></h3>
        <div style={styles.works}>
          <Work title='Global Intranet' summary='Lead design of a global intranet spanning over 10 languages and 80 thousand daily users.' link='/' />
          <Work title='Remote Education Course' summary='Creation of a new way in educating a workforce remotely.' link='/' />
          <Work title='Metrik' summary='A geometric display typeface built for unique brands.' link='/' />
          <Work title='Global People Search' summary='An iOS app for searching colleagues within a global corporation.' link='/' />
          <Work title='Agile Transformation Brand' summary='Rebrand for an innovative agile transformation.' link='/' />
        </div>
      </div>
    )
  }
}

const styles = {
  container: {
    paddingTop: '40px',

    [breakpoint.medium]: {
      paddingTop: '70px',
      paddingBottom: '40px'
    }
  },
  works: {
    paddingBottom: '40px',

    [breakpoint.medium]: {
      paddingTop: '20px',
      paddingBottom: '0'
    }
  },
  label: {
    opacity: '0.3'
  }
}

export default Works
