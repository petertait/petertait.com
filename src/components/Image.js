import React, { Component, PropTypes } from 'react'
import Radium from 'radium'
import LazyLoad from 'react-lazy-load'

import { breakpoint } from '../vars'

@Radium
class Image extends Component {
  render() {
    return (
      <LazyLoad offset={400} debounce={false}>
        <img src={this.props.url} alt={this.props.alt} style={[styles[this.props.type], styles[this.props.position]]}/>
      </LazyLoad>
    )
  }
}

const styles = {
  logo: {
    margin: '20px 0',
    border: '2px solid rgba(255,255,255, 0.15)'
  },
  background: {
    position: 'absolute',
    left: '0',
    bottom: '0',
    maxHeight: '800px',
    width: '90vw',
    opacity: '0.04',

    [breakpoint.medium]: {
      top: '-100px',
      bottom: 'auto'
    }
  },
  marginBottomNegative: {
    position: 'relative',
    marginBottom: '-48px'
  }
}

export default Image
