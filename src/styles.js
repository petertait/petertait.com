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
          transition: '0.1s',
          fontFamily: vars.fontMono,
          fontWeight: vars.fontRegular,
          fontSize: vars.bodySize,
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
        h1: {
          '-webkit-font-smoothing': 'antialiased',
          fontFamily: vars.fontSans,
          lineHeight: '1.1',
          letterSpacing: '-1px'
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
