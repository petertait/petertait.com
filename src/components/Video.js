import React, { Component, PropTypes } from 'react'
import Radium from 'radium'
import LazyLoad from 'react-lazy-load'

import { breakpoint } from '../vars'

@Radium
class Video extends Component {
  render() {
    return (
      <LazyLoad offset={400} debounce={false}>
        <div style={[styles.container, styles[this.props.color]]}>
          <video loop autoPlay src={this.props.url} alt={this.props.alt} style={[styles.video, styles[this.props.position], styles[this.props.type]]}  />
          {this.props.type && <div style={[styles.gradient, styles[this.props.color]]} />}
        </div>
      </LazyLoad>
    )
  }
}

const styles = {
  container: {
    position: 'relative'
  },
  video: {
    width: '100%',
    maxWidth: '100%'
  },
  marginBottomNegative: {
    position: 'relative',
    marginBottom: '-48px'
  },
  background: {
    marginTop: '-60px',
    marginBottom: '-30%',
    filter: 'grayscale(100%)',
    opacity: '0.25'
  },
  gradient: {
    width: '100%',
    height: '200%',
    position: 'absolute',
    top: 'calc(30% + 60px)',
    left: '0',

    [breakpoint.medium]: {

    }
  },
  education: {
    backgroundImage: 'linear-gradient(transparent, #00A9C6 50%)'
  }
}

export default Video
