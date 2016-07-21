import React, { Component, PropTypes } from 'react'
import Radium from 'radium'

@Radium
class Button extends Component {
  render() {
    return (
      <Button {...props} className={button} />
    )
  }
}

const styles = {
  button: {
    padding: '10px 15px 12px',
    border: 'none',
    backgroundColor: 'rgba(255,255,255,0.2)'
  }
}

export default Button
