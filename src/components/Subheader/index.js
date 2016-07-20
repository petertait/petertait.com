import React, { Component, PropTypes } from 'react'
import reactCxs from 'react-cxs'

import { Link } from 'react-router'

const Subheader = () => {
  const cx = {
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

  return (
    <header className={cx.subheader}>
      <ul className={cx.details}>
        <li className={cx.contact}>Peter Tait</li>
        <li className={cx.contact}><Link to="tel:+4407598276618">+44 07598 276618</Link></li>
        <li className={cx.contact}><Link to="mailto:contact@petertait.com">contact@petertait.com</Link></li>
      </ul>
    </header>
  )
}

export default Subheader
