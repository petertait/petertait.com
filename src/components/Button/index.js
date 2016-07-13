import React, { Component, PropTypes } from 'react';
import Radium from 'radium';
import { Link } from 'react-router';

class Button extends Component {
  render() {
    return (
      <Link style={styles.button} to={this.props.link}>
        {this.props.content}
      </Link>
    )
  }
}

var styles = {
  button: {
    padding: '10px 15px 12px',
    border: 'none',
    backgroundColor: 'rgba(255,255,255,0.2)'
  }
}

module.exports = Radium(Button);
