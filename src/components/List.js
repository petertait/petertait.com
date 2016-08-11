import React, { Component, PropTypes } from 'react'
import Radium from 'radium'

import { breakpoint } from '../vars'
import Styles from '../global'

import ListItem from '../components/ListItem'

@Radium
class List extends Component {
  render() {
    return (
      <div className='container' style={styles.container}>
        <h3>{this.props.title}</h3>
        <div style={styles.list}>
          <ListItem title='Global Intranet' summary='Lead design of a global intranet spanning over 10 languages and 80 thousand daily users.' link='/' />
          <ListItem title='Remote Education Course' summary='Creation of a new way in educating a workforce remotely.' link='/' />
          <ListItem title='Metrik' summary='A geometric display typeface built for unique brands.' link='/' />
          <ListItem title='Global People Search' summary='An iOS app for searching colleagues within a global corporation.' link='/' />
          <ListItem title='Agile Transformation Brand' summary='Rebrand for an innovative agile transformation.' link='/' />
        </div>
      </div>
    )
  }
}

const styles = {
  container: {
    paddingTop: '50px',

    [breakpoint.medium]: {
      paddingTop: '60px',
      paddingBottom: '40px'
    }
  },
  list: {
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

export default List
