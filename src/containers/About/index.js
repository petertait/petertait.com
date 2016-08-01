import React, { Component, PropTypes } from 'react'

import { color } from '../../vars'

import Hero from '../../components/Hero'
import Container from '../../components/Container'
import Column from '../../components/Column'
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
        <Container>
          <Column>
            <h3>About</h3>
          </Column>
          <Column>
            <div dangerouslySetInnerHTML={{ __html: ContentFile }} />
          </Column>
        </Container>
      </div>
    )
  }
}

export default Work
