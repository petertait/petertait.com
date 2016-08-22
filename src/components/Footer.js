import React, { Component, PropTypes } from 'react'
import Radium from 'radium'

import { breakpoint, layout } from '../vars'

import Container from '../components/Container'
import Column from '../components/Column'
import Social from '../components/Social'

@Radium
class Footer extends Component {
  render() {
    var today = new Date();
    var year = today.getFullYear();
    return (
      <Container>
        <Column width='full'>
          <footer style={styles.footer}>
            <div style={styles.legal}>{year + ' © Peter Tait Ltd.'}</div>
            <Social />
          </footer>
        </Column>
      </Container>
    )
  }
}

const styles = {
  footer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: '40px',
    paddingBottom: '50px',

    [breakpoint.medium]: {
      display: 'flex'
    }
  },
  legal: {
    marginBottom: '20px'
  }
}

export default Footer
