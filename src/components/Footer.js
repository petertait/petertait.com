import React, { Component, PropTypes } from 'react'
import Radium from 'radium'

import { breakpoint, layout } from '../vars'

import SocialButtons from '../components/SocialButtons'

@Radium
class Footer extends Component {
  render() {
    var today = new Date();
    var year = today.getFullYear();
    return (
      <footer className='container' style={styles.footer}>
        <div style={styles.legal}>{year + ' © Peter Tait Ltd.'}</div>
        <SocialButtons/>
      </footer>
    )
  }
}

const styles = {
  footer: {
    margin: 'auto',
    maxWidth: layout.maxWidth,
    paddingTop: '20px',
    paddingBottom: '30px',
    justifyContent: 'space-between',
    alignItems: 'center',

    [breakpoint.medium]: {
      display: 'flex',
      paddingBottom: '80px',
      paddingTop: '50px',
    }
  },
  legal: {
    marginBottom: '20px'
  }
}

export default Footer
