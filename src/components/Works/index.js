import React, { Component, PropTypes } from 'react'
import reactCxs from 'react-cxs'

import { breakpoint, layout, type } from '../../vars'
import Work from '../../components/Work'

const Works = () => {
  const cx = {
    container: {
      margin: 'auto',
      maxWidth: layout.maxWidth,
      padding: '40px 20px 0',

      [breakpoint.medium]: {
        paddingLeft: layout.gutter,
        paddingRight: layout.gutter,
        paddingTop: '70px',
        paddingBottom: '40px'
      }
    },
    title: {
      fontWeight: type.fontRegular,
      fontSize: type.bodySize,
      marginBottom: '40px'
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
  return (
    <div className={cx.container}>
      <h3 className={cx.title}>Selected Work <span className={cx.label}>– case studies coming soon</span></h3>
      <div className={cx.works}>
        <Work title='Global Intranet' summary='Lead design of a global intranet spanning over 10 languages and 80 thousand daily users.' link='/' />
        <Work title='Remote Education Course' summary='Creation of a new way in educating a workforce remotely.' link='/' />
        <Work title='Metrik' summary='A geometric display typeface built for unique brands.' link='/' />
        <Work title='Global People Search' summary='An iOS app for searching colleagues within a global corporation.' link='/' />
        <Work title='Agile Transformation Brand' summary='Rebrand for an innovative agile transformation.' link='/' />
      </div>
    </div>
  )
}

export default Works
