import React, { Component, PropTypes } from 'react'
import Radium from 'radium'

import { breakpoint, layout } from '../vars'

import Container from '../components/Container'
import Column from '../components/Column'
import Logo from '../components/Logo'
import Nav from '../components/Nav'

@Radium
class Header extends Component {
  render() {
    return (
      <Container>
        <Column width='full'>
          <header style={styles.header}>
            <Logo/>
            <Nav/>
          </header>
        </Column>
      </Container>
    )
  }
}

const styles = {
  header: {
    width: '100%',
    margin: 'auto',
    paddingTop: '40px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',

    [breakpoint.medium]: {
      paddingBottom: '30px'
    }
  }
}

export default Header
