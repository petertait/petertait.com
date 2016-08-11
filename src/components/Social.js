import React, { Component, PropTypes } from 'react'
import Radium from 'radium'

import { breakpoint } from '../vars'

@Radium
class Social extends Component {
  render() {
    return (
      <nav>
        <a style={styles.link} href="https://github.com/petertait/petertait.com">Source</a>
        <a style={styles.link} href='mailto:contact@petertait.com'>Email</a>
        <a style={styles.link} href='http://github.com/petertait' target='_blank'>Github</a>
        <a style={styles.link} href='http://twitter.com/peter_tait' target='_blank'>Twitter</a>
      </nav>
    )
  }
}

const styles = {
  link: {
    margin: '0 20px 0 0',
    borderBottom: 'none',

    [breakpoint.medium]: {
      margin: '0 0 0 40px'
    }
  }
}

export default Social
