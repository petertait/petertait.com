import React, { Component, PropTypes } from 'react';
import Radium, { Style } from 'radium';

import { type, breakpoint, layout } from './vars'

@Radium
class Styles extends Component {
  render() {
    return (
      <Style rules={{
        html: {
          boxSizing: 'border-box',
          fontSize: type.bodySize
        },
        '*, *::before, *::after': {
          boxSizing: 'inherit',
          textRendering: 'optimizeSpeed',
          padding: 0,
          margin: 0
        },
        body: {
          fontFamily: type.fontMono,
          fontWeight: type.fontRegular,
          lineHeight: '1.5'
        },
        h1: {
          fontSize: type.alpha,
          fontFamily: type.fontSans,
          lineHeight: '1.1',
          letterSpacing: '-1px',
          maxWidth: '1000px',
        },
        h2: {
          '-webkit-font-smoothing': 'antialiased',
          fontFamily: type.fontSans,
          fontSize: type.beta,
          lineHeight: '1.3'
        },
        h3: {
          fontWeight: type.fontRegular,
          fontSize: type.bodySize,
          marginBottom: '40px'
        },
        p: {
          marginBottom: '20px'
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
        img: {
          maxWidth: '100%'
        },
        li: {
          listStyle: 'none'
        },
        'input, textarea': {
          '-webkit-appearance': 'none',
          borderRadius: '0',
          width: '100%',
          outline: 'none',
          fontFamily: type.fontMono,
          fontSize: type.bodySize
        },
        'input::-webkit-input-placeholder, textarea::-webkit-input-placeholder': {
          color: 'currentColor'
        },
        textarea: {
          minHeight: '200px',
          maxWidth: '100%'
        },
        hr: {
          backgroundColor: 'currentColor',
          marginTop: '10px',
          marginBottom: '60px',
          border: 'none',
          height: '2px',
          opacity: '0.15'
        },
        'svg path': {
          fill: 'currentColor'
        },
        mediaQueries: {
          '(min-width: 600px)': {
            h1:  {
              fontSize: type.mega
            }
          },
          '(min-width: 800px)': {
            h1:  {
              fontSize: type.giga
            }
          }
        }
      }} />
    )
  }
}

export default Styles
