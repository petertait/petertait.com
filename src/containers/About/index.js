import React, { Component, PropTypes } from 'react'
import reactCxs from 'react-cxs'

import { color } from '../../vars'

import Hero from '../../components/Hero'
import Content from '../../components/Content'
import ContentFile from './content.md'

class Work extends Component {
  componentWillMount() {
    this.state = {
      theme: {
        primary: color.sky,
        secondary: color.blue
      }
    }
    document.body.style.backgroundColor = this.state.theme.primary;
    document.body.style.color = this.state.theme.secondary;
  }

  render() {
    return (
      <div>
        <Hero headline='User interface + experience designer at pebble {code}.' />
        <div className='container'>
          <Content title='About' html={ContentFile} />
        </div>
      </div>
    )
  }
}

export default Work
