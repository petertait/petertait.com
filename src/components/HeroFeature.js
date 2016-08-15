import React, { Component, PropTypes } from 'react'
import Radium from 'radium'

import { breakpoint, type } from '../vars'

@Radium
class Hero extends Component {
  render() {
    const image = {
      backgroundImage: 'url(../images/work/' + this.props.image + '/hero.png)'
    }
    return (
      <section style={[styles.hero, image]}>
        <div style={[styles.gradient, styles[this.props.image]]} />
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
  nucleus: {
    backgroundImage: 'linear-gradient(transparent 30%, #3d1d90)'
  },
  education: {
    backgroundImage: 'linear-gradient(transparent 30%, #00A9C6)'
  },
  people: {
    backgroundImage: 'linear-gradient(transparent 30%, #C90077)'
  },
  metrik: {
    backgroundImage: 'linear-gradient(transparent 30%, #00bc6c)'
  },
  express: {
    backgroundImage: 'linear-gradient(transparent 30%, #252678)'
  },
  experiments: {
    backgroundImage: 'linear-gradient(transparent 30%, #F37D00)'
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
