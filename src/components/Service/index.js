import React, { Component, PropTypes } from 'react'
import Radium from 'radium'
import Isvg from 'react-inlinesvg'

import { type, breakpoint, layout } from '../../vars'

@Radium
class Service extends Component {
  render() {
    return (
      <div style={styles.service}>
        <div style={styles.inner}>
          <span style={styles.image}>
            <Isvg src={this.props.image} />
          </span>
          <h2 style={styles.title}>{this.props.title}</h2>
          <p>{this.props.summary}</p>
        </div>
      </div>
    )
  }
}

const styles = {
  service: {
    display: 'block',
    textAlign: 'center',

    [breakpoint.medium]: {
      display: 'flex',
      width: 'calc(33% - 5px)',
    },
  },
  odd: {
    margin: '20px 0',

    [breakpoint.medium]: {
      margin: '0 10px'
    }
  },
  inner: {
    backgroundColor: 'rgba(0,0,0,0.06)',
    padding: '60px 30px 10px'
  },
  image: {
    display: 'block'
  },
  title: {
    WebkitFontSmoothing: 'antialiased',
    fontFamily: type.fontSans,
    fontSize: type.beta,
    lineHeight: '1.2',
    marginTop: '50px',
    marginBottom: '15px'
  }
}


export default Service
