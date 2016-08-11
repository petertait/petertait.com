import React, { Component, PropTypes } from 'react'

import { color } from '../../vars'

import Hero from '../../components/Hero'
import Mosaic from '../../components/Mosaic'

class Home extends Component {
  componentWillMount() {
    this.state = {
      theme: {
        primary: color.black,
        secondary: color.white
      }
    }
    document.body.style.backgroundColor = this.state.theme.primary
    document.body.style.color = this.state.theme.secondary
  }

  render() {
    return (
      <div>
        <Hero headline='Selected Works.' />
        <Mosaic />
      </div>
    )
  }
}

export default Home
