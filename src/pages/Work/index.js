import React, { Component, PropTypes } from 'react'

import { color } from '../../vars'

import Hero from '../../components/Hero'
import GridBlock from '../../components/GridBlock'

class Work extends Component {
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
        <div className='container'>
          <GridBlock
            title='Global Intranet'
            summary='Lead design and frontend developer of a global intranet spanning over 10 languages and 80 thousand daily users.'
            project='intranet'
            width='third' />
          <GridBlock
            title='Remote Education App'
            summary='Lead design and frontend developer of a global intranet spanning over 10 languages and 80 thousand daily users.'
            project='education'
            width='third' />
        </div>
      </div>
    )
  }
}

export default Work
