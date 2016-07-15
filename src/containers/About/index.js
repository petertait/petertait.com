import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import Radium from 'radium';

import vars from '../../vars';

import Hero from '../../components/Hero';

class Work extends Component {
  componentWillMount() {
    this.state = {
      theme: {
        primary: vars.sky,
        secondary: vars.purple
      }
    }

    document.body.style.backgroundColor = this.state.theme.primary;
    document.body.style.color = this.state.theme.secondary;
  }

  render() {
    return (
      <Hero headline='User interface + experience designer at pebble {code}.'/>
    )
  }
}

module.exports = Radium(Work);
