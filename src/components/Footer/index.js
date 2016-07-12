import React, { Component, PropTypes } from 'react'
import Radium from 'radium'

class Footer extends Component {
  render() {
    return (
      <footer className='container' style={styles.footer}>
        2016 Peter Tait
      </footer>
    )
  }
}

var styles = {
  footer: {
  }
}

module.exports = Radium(Footer)
