import React, { Component, PropTypes } from 'react'
import Radium from 'radium'

@Radium
class Vimeo extends Component {
  render() {
    return (
      <div style={styles.container}>
        <iframe style={styles.video} src={this.props.url} frameBorder='0'></iframe>
      </div>
    )
  }
}

const styles = {
  container: {
    position: 'relative',
    paddingBottom: '56.25%',
    height: '0',
    overflow: 'hidden',
    maxWidth: '100%'
  },
  video: {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    border: '0',
    borderRadius: '5px'
  }
}

export default Vimeo
