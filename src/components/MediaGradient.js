import React, { Component, PropTypes } from 'react'
import Radium from 'radium'

@Radium
class MediaGradient extends Component {
  render() {
    const gradient = {
      backgroundImage: 'linear-gradient(rgba(0,0,0,0),' + this.props.color + ' 50%)'
    }
    return (
      <div style={[styles.gradient, gradient]} />
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
  }
}

export default MediaGradient
