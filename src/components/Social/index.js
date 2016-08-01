import React, { Component, PropTypes } from 'react'
import Radium from 'radium'

import { breakpoint } from '../../vars'

@Radium
class Social extends Component {
  render() {
    return (
      <nav style={styles.nav}>
        <a style={styles.link} href='mailto:contact@petertait.com'>Email</a>
        <a style={styles.link} href='http://github.com/petertait' target='_blank'>Github</a>
        <a style={styles.link} href='http://twitter.com/peter_tait' target='_blank'>Twitter</a>
      </nav>
    )
  }
}

const styles = {
  nav: {
    justifyContent: 'flex-end'
  },
  link: {
    margin: '0 40px 0 0',
    borderBottom: 'none',

    [breakpoint.medium]: {
      margin: '0 0 0 40px'
    }
  }
}

export default Social
