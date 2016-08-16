import React, { Component, PropTypes } from 'react'
import Radium from 'radium'
import LazyLoad from 'react-lazy-load'

import { breakpoint } from '../vars'

import MediaGradient from './MediaGradient'

@Radium
class Image extends Component {
  render() {
    var mediaComponent
    if (this.props.media === 'video') {
      mediaComponent = (
        <video src={this.props.url} alt={this.props.alt} style={[styles.media, styles[this.props.position], styles[this.props.type]]} loop autoPlay />
      )
    } else {
      mediaComponent = (
        <img src={this.props.url} alt={this.props.alt} style={[styles.media, styles[this.props.position], styles[this.props.type], styles[this.props.color]]} />
      )
    }
    var gradient
    if (this.props.gradient === 'true') {
      gradient = <MediaGradient color={this.props.color} />
    }
    return (
      <LazyLoad offset={400} debounce={false}>
        <div style={styles.container}>
          {mediaComponent}
          {gradient}
        </div>
      </LazyLoad>
    )
  }
}

const styles = {
  container: {
    position: 'relative'
  },
  media: {
    width: '100%',
    maxWidth: '100%'
  },
  border: {
    marginTop: '20px',
    borderWidth: '2px',
    borderStyle: 'solid',
    borderColor: 'rgba(255,255,255, 0.15)'
  },
  black: {
    borderColor: 'rgba(0,0,0, 0.15)'
  },
  background: {
    marginTop: '-60px',
    marginBottom: '-30%',
    filter: 'grayscale(100%)',
    opacity: '0.3',
    display: 'none',

    [breakpoint.small]: {
      display: 'inline'
    }
  },
  marginBottomNegative: {
    position: 'relative',
    marginBottom: '-48px'
  }
}

export default Image
