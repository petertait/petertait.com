import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import Radium from 'radium';

import vars from '../../vars';

import Hero from '../../components/Hero';

class Home extends Component {
  componentWillMount() {
    this.state = {
      theme: {
        primary: vars.aqua,
        secondary: vars.boy
      }
    }

    document.body.style.backgroundColor = this.state.theme.primary;
    document.body.style.color = this.state.theme.secondary;
  }

  render() {
    return (
      <div className='container'>
        <Hero headline='Multifunctional designer/developer based in Bath — a traditionally trained designer that codes.' link='/about' linkText='Discover more about me'/>
      </div>
    )
  }
}

module.exports = Radium(Home);
