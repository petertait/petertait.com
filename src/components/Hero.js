import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import Radium from 'radium'

import { breakpoint } from '../vars'

import Container from '../components/Container'
import Column from '../components/Column'
import AnchorLink from '../components/AnchorLink'

@Radium
class Hero extends Component {
  render() {
    return (
      <Container>
        <Column width='full'>
          <div style={styles.hero}>
            <h1>{this.props.headline}</h1>
            {this.props.link && <span style={styles.link}><AnchorLink link={this.props.link} text={this.props.text} /></span>}
          </div>
        </Column>
      </Container>
    )
  }
}

const styles = {
  hero: {
    paddingTop: '30px',
    paddingBottom: '30px',

    [breakpoint.medium]: {
      paddingBottom: '60px'
    }
  },
  link: {
    marginTop: '60px',
    display: 'table',

    [breakpoint.medium]: {
      marginTop: '80px'
    }
  }
}

export default Hero
