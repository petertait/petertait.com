import React, { Component, PropTypes } from 'react';
import Radium from 'radium';

import Social from '../../components/Social';

class Footer extends Component {
  render() {
    return (
      <footer className='container' style={styles.footer}>
        <span>{this.props.legal}</span>
        <Social />
      </footer>
    )
  }
}

var styles = {
  footer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: '30px',
    paddingBottom: '10px'
  }
}

module.exports = Radium(Footer);
