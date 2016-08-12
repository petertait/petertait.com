import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import Radium from 'radium'

import { breakpoint, type } from '../vars'

@Radium
class Intro extends Component {
  render() {
    return (
      <section className='container'>
        <div style={styles.intro}>
          <h2 style={styles.headline}>{this.props.headline}</h2>
        </div>
      </section>
    )
  }
}

const styles = {
  intro: {
    marginTop: '-50px',
    paddingBottom: '60px',

    [breakpoint.medium]: {
      marginTop: '-80px',
      paddingBottom: '100px'
    }
  },
  headline: {
    fontFamily: type.fontMono,
    fontWight: type.fontRegular,
    fontSize: type.beta,
    lineHeight: '1.6'
  }
}

export default Intro
