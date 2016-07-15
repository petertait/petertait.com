import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import Radium from 'radium';

import vars from '../../vars';

import Hero from '../../components/Hero';
import Content from '../../components/Content';

import ContentFile from './content.md';

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
      <div>
        <Hero headline='User interface + experience designer at pebble {code}.' />
        <Content title='About' source={ContentFile} />
      </div>
    )
  }
}

module.exports = Radium(Work);
