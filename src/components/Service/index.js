import React, { Component, PropTypes } from 'react'
import reactCxs from 'react-cxs'

import Isvg from 'react-inlinesvg'

import { type, breakpoint, layout } from '../../vars'

const Service = ({
  title,
  summary,
  image
}) => {
  const cx = {
    service: {
      display: 'block',
      textAlign: 'center',

      [breakpoint.medium]: {
        display: 'flex',
        width: 'calc(33% - 5px)',
      },

      ':nth-of-type(even)': {
        margin: '20px 0',

        [breakpoint.medium]: {
          margin: '0 10px'
        }
      }
    },
    inner: {
      backgroundColor: 'rgba(0,0,0,0.06)',
      padding: '60px 30px 10px'
    },
    image: {
      display: 'block'
    },
    title: {
      '-webkit-font-smoothing': 'antialiased',
      fontFamily: type.fontSans,
      fontSize: type.beta,
      lineHeight: '1.2',
      marginTop: '50px',
      marginBottom: '15px'
    }
  }

  return (
    <div className={cx.service}>
      <div className={cx.inner}>
        <span className={cx.image}>
          <Isvg src={image} />
        </span>
        <h2 className={cx.title}>{title}</h2>
        <p>{summary}</p>
      </div>
    </div>
  )
}

export default Service
