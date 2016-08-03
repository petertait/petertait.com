import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import Radium from 'radium'

@Radium
class Details extends Component {
  render() {
    var today = new Date();
    var year = today.getFullYear();
    return (
      <ul style={styles.details}>
        <li style={styles.contact}>{year + ' © Peter Tait Ltd.'}</li>
        <li style={styles.contact}><Link to="mailto:contact@petertait.com">contact@petertait.com</Link></li>
        <li style={styles.contact}><Link to="tel:+4407598276618">+44 07598 276618</Link></li>
      </ul>
    )
  }
}

const styles = {
  details: {
    padding: '60px 0',
  },
  contact: {
    marginBottom: '15px'
  }
}

export default Details
