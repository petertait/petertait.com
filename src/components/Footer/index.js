import React, { Component, PropTypes } from 'react'
import reactCxs from 'react-cxs'

import { breakpoint, layout } from '../../vars'

import Social from '../../components/Social'

const Footer = () => {
  const cx = {
    footer: {
      margin: 'auto',
      maxWidth: layout.maxWidth,
      padding: '40px 20px 30px',
      justifyContent: 'space-between',
      alignItems: 'center',

      [breakpoint.medium]: {
        display: 'flex',
        paddingLeft: layout.gutter,
        paddingRight: layout.gutter,
        paddingBottom: '100px',
        paddingTop: '30px',
      }
    },
    legal: {
      marginBottom: '20px'
    }
  }

  var today = new Date();
  var year = today.getFullYear();

  return (
    <footer className={cx.footer}>
      <div className={cx.legal}>{year + ' © Peter Tait Ltd.'}</div>
      <Social/>
    </footer>
  )
}

export default Footer
