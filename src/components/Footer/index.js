import React, { Component, PropTypes } from 'react';
import Radium from 'radium';

import Social from '../../components/Social';

class Footer extends Component {
  render() {
    var today = new Date();
    var year = today.getFullYear();
    return (
      <footer className='container' style={styles.footer}>
        <span>{year + ' © Peter Tait'}</span>
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
