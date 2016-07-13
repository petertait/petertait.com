import React, { Component, PropTypes } from 'react';
import Radium from 'radium';
import { Link } from 'react-router';

class HireBtn extends Component {
  render() {
    return (
      <Link style={styles.btn} to='/about'>

      </Link>
    )
  }
}

var styles = {
  btn: {
  }
}

module.exports = Radium(HireBtn);
