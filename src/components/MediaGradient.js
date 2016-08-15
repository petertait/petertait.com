import React, { Component, PropTypes } from 'react'
import Radium from 'radium'

@Radium
class MediaGradient extends Component {
  render() {
    return (
      <div style={[styles.gradient, styles[this.props.color]]} />
    )
  }
}

const styles = {
  gradient: {
    width: '100%',
    height: '200%',
    position: 'absolute',
    top: 'calc(30% + 60px)',
    left: '0'
  },
  nucleus: {
    backgroundImage: 'linear-gradient(transparent, #3d1d90 50%)'
  },
  education: {
    backgroundImage: 'linear-gradient(transparent, #00A9C6 50%)'
  },
  people: {
    backgroundImage: 'linear-gradient(transparent, #C90077 50%)'
  },
  metrik: {
    backgroundImage: 'linear-gradient(transparent, #00bc6c 50%)'
  },
  express: {
    backgroundImage: 'linear-gradient(transparent, #252678 50%)'
  },
}

export default MediaGradient
