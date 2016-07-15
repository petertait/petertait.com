import React, { Component, PropTypes } from 'react';
import Radium from 'radium';

import vars from '../../vars';

import Hero from '../../components/Hero';
import Services from '../../components/Services';
import Works from '../../components/Works';

class Home extends Component {
  componentWillMount() {
    this.state = {
      theme: {
        primary: vars.purple,
        secondary: vars.sky
      }
    }
    document.body.style.backgroundColor = this.state.theme.primary;
    document.body.style.color = this.state.theme.secondary;
  }

  render() {
    return (
      <div>
        <Hero headline='Multifunctional designer/developer based in Bath — a traditionally trained designer that codes.' link='/about' linkText='Discover more about me' />
        <Services />
        <Works />
      </div>
    )
  }
}

var styles = {
  hero: {
    marginBottom: '70px',

    '@media screen and (min-width: 800px)': {
      marginBottom: '120px'
    }
  }
}

module.exports = Radium(Home);
