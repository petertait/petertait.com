import React, { Component, PropTypes } from 'react'
import Radium from 'radium'

import { breakpoint, type } from '../vars'

@Radium
class Block extends Component {
  render() {
    return (
      <div className='container'
        style={[
          styles.container,
          styles[this.props.border],
          styles[this.props.color],
          styles[this.props.type]
        ]}>
        <h3 style={styles.title}>{this.props.title}</h3>
        {this.props.intro && <p style={styles.intro}>{this.props.intro}</p>}
        {this.props.children}
      </div>
    )
  }
}

const styles = {
  container: {
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    verticalAlign: 'top',
    justifyContent: 'space-between',
    position: 'relative',
    marginTop: '40px',
    marginBottom: '20px',
    overflow: 'hidden'
  },
  title: {
    padding: '0 10px 20px',
    width: '100%',
    marginBottom: '0'
  },
  intro: {
    fontSize: type.delta,
    padding: '0 10px 10px',
    opacity: '0.8',

    [breakpoint.medium]: {
      fontSize: type.epsilon,
      padding: '0 10px',
    }
  },
  processFeature: {
    marginBottom: '50px',

    [breakpoint.medium]: {
      marginTop: '-150px',
    }
  },
  process: {
    marginTop: '0',
    marginBottom: '50px',
  },
  solid: {
    padding: '30px 20px 20px',
    borderStyle: 'solid',
    borderWidth: '2px',
    borderColor: 'rgba(255,255,255, 0.2)'
  },
  black: {
    borderColor: 'rgba(0,0,0, 0.2)'
  }
}

export default Block
