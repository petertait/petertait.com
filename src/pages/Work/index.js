import React, { Component, PropTypes } from 'react'

import { color } from '../../vars'

import Hero from '../../components/Hero'
import Mosaic from '../../components/Mosaic'
import MosaicBlock from '../../components/MosaicBlock'

class About extends Component {
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
        <Mosaic title='Recent Work'>
          <MosaicBlock
            title='Global Intranet'
            summary='Lead design and frontend developer of a global intranet spanning over 10 languages and 80 thousand daily users.'
            link='/work/intranet'
            project='intranet'
            color='pink'
            width='twoThird' />
          <MosaicBlock
            title='Global Intranet'
            summary='Lead design and frontend developer of a global intranet spanning over 10 languages and 80 thousand daily users.'
            link='/work/intranet'
            project='intranet'
            color='pink'
            width='third' />
        </Mosaic>
      </div>
    )
  }
}

export default About
