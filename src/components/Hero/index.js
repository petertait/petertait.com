import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import Radium from 'radium'

import { type, breakpoint, layout } from '../../vars'

@Radium
class Hero extends Component {
  render() {
    return (
      <section style={styles.container}>
        <div style={styles.hero}>
          <h1 style={styles.h1}>{this.props.headline}</h1>
          {this.props.link && <Link to={this.props.link} style={styles.button}>{this.props.linkText}</Link>}
        </div>
      </section>
    )
  }
}

const styles = {
  container: {
    margin: 'auto',
    maxWidth: layout.maxWidth,
    paddingRight: '20px',
    paddingLeft: '20px',

    [breakpoint.medium]: {
      paddingLeft: layout.gutter,
      paddingRight: layout.gutter
    }
  },
  hero: {
    paddingTop: '40px',
    paddingBottom: '60px',

    [breakpoint.medium]: {
      paddingBottom: '100px'
    }
  },
  h1: {
    fontFamily: type.fontSans,
    fontSize: type.alpha,
    lineHeight: '1.1',
    letterSpacing: '-1px',
    maxWidth: '1000px',

    [breakpoint.small]: {
      fontSize: type.mega
    },
    [breakpoint.medium]: {
      fontSize: type.giga
    }
  },
  button: {
    marginTop: '80px',
    display: 'table'
  }
}

export default Hero
