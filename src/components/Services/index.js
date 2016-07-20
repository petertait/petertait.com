import React, { Component, PropTypes } from 'react'
import reactCxs from 'react-cxs'


import Service from '../../components/Service'
import { breakpoint, layout, type } from '../../vars'

const Services = () => {
  const cx = {
    container: {
      borderTop: '1px solid rgba(255,255,255,0.2)',
      borderBottom: '1px solid rgba(255,255,255,0.2)',
      padding: '40px 0 50px',

      [breakpoint.medium]: {
        padding: '50px 0 60px'
      }
    },
    inner: {
      margin: 'auto',
      maxWidth: layout.maxWidth,
      paddingLeft: '20px',
      paddingRight: '20px',

      [breakpoint.medium]: {
        paddingLeft: layout.gutter,
        paddingRight: layout.gutter,
      }
    },
    title: {
      fontWeight: type.fontRegular,
      fontSize: type.bodySize,
      marginBottom: '40px'
    },
    services: {
      display: 'flex',
      flexWrap: 'wrap'
    }
  }

  return (
    <section className={cx.container}>
      <div className={cx.inner}>
        <h3 className={cx.title}>Services</h3>
        <div className={cx.services}>
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

export default Services
