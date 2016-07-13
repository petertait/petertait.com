import React, { Component, PropTypes } from 'react';
import Radium from 'radium';

class Footer extends Component {
  render() {
    return (
      <footer className='container' style={styles.footer}>{this.props.legal}</footer>
    )
  }
}

var styles = {
  footer: {
  }
}

module.exports = Radium(Footer);
