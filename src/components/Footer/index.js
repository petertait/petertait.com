import React, { Component, PropTypes } from 'react'
import Radium from 'radium'
import { breakpoint, layout } from '../../vars'

import Social from '../../components/Social'

@Radium
class Footer extends Component {
  render() {
    var today = new Date();
    var year = today.getFullYear();
    return (
      <footer style={styles.footer}>
        <div style={styles.legal}>{year + ' © Peter Tait Ltd.'}</div>
        <Social/>
      </footer>
    )
  }
}

const styles = {
  footer: {
    margin: 'auto',
    maxWidth: layout.maxWidth,
    padding: '40px 20px 30px',
    justifyContent: 'space-between',
    alignItems: 'center',

    [breakpoint.medium]: {
      display: 'flex',
      paddingLeft: layout.gutter,
      paddingRight: layout.gutter,
      paddingBottom: '100px',
      paddingTop: '30px',
    }
  },
  legal: {
    marginBottom: '20px'
  }
}

export default Footer
