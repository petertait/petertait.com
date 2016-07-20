import React, { Component, PropTypes } from 'react'
import reactCxs from 'react-cxs'

import { breakpoint } from '../../vars'

const Social = () => {
  const cx = {
    nav: {
      justifyContent: 'flex-end'
    },
    link: {
      margin: '0 40px 0 0',
      borderBottom: 'none',

      [breakpoint.medium]: {
        margin: '0 0 0 40px'
      }
    }
  }

  return (
    <nav className={cx.nav}>
      <a className={cx.link} href='mailto:contact@petertait.com'>Email</a>
      <a className={cx.link} href='http://github.com/petertait' target='_blank'>Github</a>
      <a className={cx.link} href='http://twitter.com/peter_tait' target='_blank'>Twitter</a>
    </nav>
  )
}

export default Social
