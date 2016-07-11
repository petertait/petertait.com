import React, { Component, PropTypes } from 'react'
import Radium, { Style } from 'radium'

import vars from './vars'

class Styles extends Component {
  render() {
    return (
      <Style rules={{
        html: {
          boxSizing: 'border-box'
        },
        '*, *::before, *::after': {
          boxSizing: 'inherit',
          textRendering: 'optimizeSpeed',
          padding: 0,
          margin: 0
        },
        body: {
          fontFamily: vars.fontMono,
          fontWeight: vars.fontRegular,
          lineHeight: '1.4'
        },
        '.container': {
          position: 'relative',
          margin: 'auto',
          width: '100%',
          maxWidth: vars.maxWidth,
          paddingLeft: vars.gutter,
          paddingRight: vars.gutter
        },
        a: {
          color: 'inherit',
          textDecoration: 'none',
          paddingBottom: '2px',
          borderBottom: '2px solid'
        },
        'svg path': {
          fill: 'currentColor'
        }
      }} />
    )
  }
}

module.exports = Radium(Styles)
