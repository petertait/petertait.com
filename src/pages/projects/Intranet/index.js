import React, { Component, PropTypes } from 'react'
import scriptLoader from 'react-async-script-loader'

import { color } from '../../../vars'

import Hero from '../../../components/Hero'
import Intro from '../../../components/Intro'
import Gallery from '../../../components/Gallery'

class Intranet extends Component {
  componentWillMount() {
    this.state = {
      theme: {
        primary: color.intranet,
        secondary: color.white
      }
    }
    document.body.style.backgroundColor = this.state.theme.primary
    document.body.style.color = this.state.theme.secondary
  }

  render() {
    return (
      <div>
        <Hero headline='Global Intranet.' />
        <Intro headline='One of the largest Pharma brands set out to centralise and simplify the way their company communicates across multiple departments, languages and locations.' />

        <Gallery />

      </div>
    )
  }
}

export default Intranet
