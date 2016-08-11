import React, { Component, PropTypes } from 'react'

import { color } from '../../vars'

import Hero from '../../components/Hero'
import Services from '../../components/Services'
import List from '../../components/List'

class Home extends Component {
  componentWillMount() {
    this.state = {
      theme: {
        primary: color.blue,
        secondary: color.white
      }
    }
    document.body.style.backgroundColor = this.state.theme.primary
    document.body.style.color = this.state.theme.secondary
  }

  render() {
    return (
      <div>
        <Hero headline='Multifunctional designer/developer based in Bath — a traditionally trained designer that codes.' link='/about' linkText='Discover more about me' />
        <Services />
        <List title='Selected Work' />
      </div>
    )
  }
}

export default Home
