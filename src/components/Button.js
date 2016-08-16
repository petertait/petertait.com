import React, { Component, PropTypes } from 'react'
import Radium from 'radium'
import Isvg from 'react-inlinesvg'

import { breakpoint, color, type } from '../vars'

@Radium
class Button extends Component {
  render() {
    const icon = '../images/' + this.props.icon + '.svg'
    return (
      <button
      style={[styles.button, styles[this.props.color], styles[this.props.margin]]}
      onClick={this.props.click}>
        {this.props.icon && <span style={styles.icon}><Isvg src={icon}/></span>}
        <span style={styles.text}>{this.props.text} {this.props.type === 'arrow' && '→'}</span>
      </button>
    )
  }
}

const styles = {
  button: {
    display: 'table',
    marginTop: '15px',
    marginBottom: '30px',
    padding: '15px 20px',
    borderWidth: '2px',
    borderStyle: 'solid',
    borderColor: 'inherit',
    backgroundColor: 'transparent',
    cursor: 'pointer',
    lineHeight: '1',
    fontSize: type.bodySize,
    fontFamily: type.fontMono,
    transition: '0.2s background-color',
    outline: 'none'
  },
  icon: {
    width: '20px',
    height: 'auto',
    display: 'inline-block',
    verticalAlign: 'middle',
    marginRight: '10px',
    opacity: '0.5'
  },
  text: {
    display: 'inline-block',
    verticalAlign: 'middle'
  },
  education: {
    color: color.white,

    ':hover': {
      borderColor: color.white,
      backgroundColor: color.white,
      color: color.education
    }
  },
  metrik: {
    color: color.white,

    ':hover': {
      borderColor: color.white,
      backgroundColor: color.white,
      color: color.metrik
    }
  },
  experiments: {
    ':hover': {
      borderColor: color.black,
      backgroundColor: color.black,
      color: color.experiments
    }
  },

  topBottom: {
    display: 'table',
    marginTop: '50px',
    marginBottom: '60px'
  },
  bottom: {
    display: 'table',
    marginBottom: '50px'
  }
}

export default Button
