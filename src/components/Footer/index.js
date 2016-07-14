import React, { Component, PropTypes } from 'react';
import Radium from 'radium';

import Social from '../../components/Social';

class Footer extends Component {
  render() {
    var today = new Date();
    var year = today.getFullYear();
    return (
      <footer style={styles.footer}>
        <div className='container' style={styles.inner}>
          <span>{year + ' © Peter Tait Ltd.'}</span>
          <Social />
        </div>
      </footer>
    )
  }
}

var styles = {
  footer: {
    // borderTop: '1px solid white'
  },
  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: '30px',
    paddingBottom: '100px'
  }
}

module.exports = Radium(Footer);
