import React, { Component, PropTypes } from 'react'
import reactCxs from 'react-cxs'


import { color } from '../../vars'

import Hero from '../../components/Hero'
import Services from '../../components/Services'
import Works from '../../components/Works'

class Home extends Component {
  componentWillMount() {
    this.state = {
      theme: {
        primary: color.purple,
        secondary: color.sky
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

export default Home
