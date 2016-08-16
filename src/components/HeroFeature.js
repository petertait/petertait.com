import React, { Component, PropTypes } from 'react'
import Radium from 'radium'

import { breakpoint, type, color } from '../vars'

@Radium
class Hero extends Component {
  render() {
    const image = {
      backgroundImage: 'url(../images/work/' + this.props.image + '/hero.png)'
    }
    const gradient = {
      backgroundImage: 'linear-gradient(rgba(0,0,0,0) 30%,' + this.props.color + ')'
    }
    return (
      <section style={[styles.hero, image]}>
        <div style={[styles.gradient, gradient]} />
        <div className='container'>
          <div style={styles.inner}>
            <h1 style={styles.title}>{this.props.headline}</h1>
          </div>
        </div>
      </section>
    )
  }
}

const styles = {
  hero: {
    position: 'relative',
    top: '-150px',
    paddingTop: '150px',
    marginBottom: '-200px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    zIndex: '-1',

    [breakpoint.medium]: {
      marginBottom: '-170px',
    }
  },
  inner: {
    padding: '50px 0 120px',
    position: 'relative',
    zIndex: '3',

    [breakpoint.medium]: {
      textAlign: 'center',
      padding: '80px 20px 200px'
    }
  },
  gradient: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    left: '0',
    bottom: '0'
  },
  title: {
    fontSize: type.mega,
    textShadow: '0 0 40px rgba(0,0,0, 0.3)',

    [breakpoint.small]: {
      fontSize: type.giga
    },

    [breakpoint.medium]: {
      fontSize: type.tera
    }
  }
}

export default Hero
