import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import Radium from 'radium'

@Radium
class Subheader extends Component {
  render() {
    return (
      <header style={styles.subheader}>
        <ul style={styles.details}>
          <li style={styles.contact}>Peter Tait</li>
          <li style={styles.contact}><Link to="tel:+4407598276618">+44 07598 276618</Link></li>
          <li style={styles.contact}><Link to="mailto:contact@petertait.com">contact@petertait.com</Link></li>
        </ul>
      </header>
    )
  }
}

const styles = {
  subheader: {
    display: 'flex',
    flex: '1 100%',
    flexFlow: 'row wrap',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  details: {
    padding: '60px 0'
  },
  contact: {
    marginBottom: '10px'
  }
}

export default Subheader
