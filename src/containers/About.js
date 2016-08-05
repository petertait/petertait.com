import React, { Component, PropTypes } from 'react'

import { color } from '../vars'

import Hero from '../components/Hero'
import Container from '../components/Container'
import Column from '../components/Column'
import Content from '../content/About.md'

class Work extends Component {
  componentWillMount() {
    this.state = {
      theme: {
        primary: color.yellow,
        secondary: color.black
      }
    }
    document.body.style.backgroundColor = this.state.theme.primary
    document.body.style.color = this.state.theme.secondary
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
            <div dangerouslySetInnerHTML={{ __html: Content }} />
          </Column>
        </Container>
      </div>
    )
  }
}

export default Work