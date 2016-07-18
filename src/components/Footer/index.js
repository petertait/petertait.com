import React, { Component, PropTypes } from 'react'
import Radium from 'radium'

import Social from '../../components/Social'

class Footer extends Component {
  render() {
    var today = new Date();
    var year = today.getFullYear();
    return (
      <footer className='container' style={styles.footer}>
        <div style={styles.legal}>{year + ' © Peter Tait Ltd.'}</div>
        <Social/>
      </footer>
    )
  }
}

var styles = {
  footer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: '30px',
    display: 'block',

    '@media screen and (min-width: 900px)': {
      paddingBottom: '100px',
      paddingTop: '30px',
      display: 'flex'
    }
  },
  legal: {
    '@media screen and (max-width: 900px)': {
      marginBottom: '20px'
    }
  }
}

module.exports = Radium(Footer);
