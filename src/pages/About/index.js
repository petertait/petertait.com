import React, { Component, PropTypes } from 'react'

import { color } from '../../vars'

import Hero from '../../components/Hero'
import Container from '../../components/Container'
import Column from '../../components/Column'
import LinkInline from '../../components/LinkInline'
import Content from './content.md'

class Work extends Component {
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
        <Hero headline='User interface + experience designer at pebble {code}.' />
        <Container>
          <Column width='half'>
            <h3>About</h3>
            <LinkInline link='cv' linkText='Curriculum Vitae' margin='vertical' />
          </Column>
          <Column width='half'>
            <div dangerouslySetInnerHTML={{ __html: Content }} />
          </Column>
        </Container>
      </div>
    )
  }
}

export default Work
