import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import Radium from 'radium';

import vars from '../../vars';

import Hero from '../../components/Hero';

class Work extends Component {
  componentWillMount() {
    this.state = {
      theme: {
        primary: vars.boy,
        secondary: vars.black
      }
    }

    document.body.style.backgroundColor = this.state.theme.primary;
    document.body.style.color = this.state.theme.secondary;
  }

  render() {
    return (
      <div className='container'>
        <Hero headline='User interface + experience designer at pebble {code}.' link='/about' linkText='Discover more about me'/>
      </div>
    )
  }
}

module.exports = Radium(Work);
