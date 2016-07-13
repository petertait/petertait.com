import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import Radium from 'radium';

import vars from '../../vars';

import Hero from '../../components/Hero';

class Work extends Component {
  componentWillMount() {
    this.state = {
      theme: {
        primary: vars.blue,
        secondary: vars.sky
      }
    }

    document.body.style.backgroundColor = this.state.theme.primary;
    document.body.style.color = this.state.theme.secondary;
  }

  render() {
    return (
      <div className='container'>
        <Hero headline='Work' link='/work' linkText='Discover more about me'/>
      </div>
    )
  }
}

module.exports = Radium(Work);