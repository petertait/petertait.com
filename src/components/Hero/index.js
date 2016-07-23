import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import Radium from 'radium'

import { type, breakpoint, layout } from '../../vars'

@Radium
class Hero extends Component {
  render() {
    return (
      <section className='container'>
        <div style={styles.hero}>
          <h1>{this.props.headline}</h1>
          {this.props.link && <Link to={this.props.link} style={styles.button}>{this.props.linkText}</Link>}
        </div>
      </section>
    )
  }
}

const styles = {
  hero: {
    paddingTop: '40px',
    paddingBottom: '60px',

    [breakpoint.medium]: {
      paddingBottom: '100px'
    }
  },
  button: {
    marginTop: '80px',
    display: 'table'
  }
}

export default Hero
