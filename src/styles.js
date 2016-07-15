import React, { Component, PropTypes } from 'react';
import Radium, { Style } from 'radium';

import vars from './vars';

class Styles extends Component {
  render() {
    return (
      <Style rules={{
        html: {
          boxSizing: 'border-box',
          fontSize: vars.bodySize
        },
        '*, *::before, *::after': {
          '-webkit-font-smoothing': 'antialiased',
          boxSizing: 'inherit',
          textRendering: 'optimizeSpeed',
          padding: 0,
          margin: 0
        },
        body: {
          transition: '0.2s',
          fontFamily: vars.fontMono,
          fontWeight: vars.fontRegular,
          lineHeight: '1.4'
        },
        '.container': {
          position: 'relative',
          margin: 'auto',
          width: '100%',
          maxWidth: vars.maxWidth,
          paddingLeft: '20px',
          paddingRight: '20px'
        },
        mediaQueries: {
          '(min-width: 600px)': {
            '.container':  {
              paddingLeft: vars.gutter,
              paddingRight: vars.gutter,
            }
          }
        },
        h1: {
          fontFamily: vars.fontSans,
          lineHeight: '1.1',
          letterSpacing: '-1px'
        },
        h3: {
          fontWeight: vars.fontRegular,
          fontSize: vars.bodySize,
          marginBottom: '40px'
        },
        a: {
          color: 'inherit',
          textDecoration: 'none',
          paddingBottom: '1px',
          borderBottom: '1px solid',
          transition: '0.2s opacity'
        },
        'a:hover': {
          opacity: '0.7'
        },
        li: {
          listStyle: 'none'
        },
        'svg path': {
          fill: 'currentColor'
        }
      }} />
    )
  }
}

module.exports = Radium(Styles);
