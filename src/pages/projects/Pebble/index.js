import React, { Component, PropTypes } from 'react'

import { color } from '../../../vars'

import HeroFeature from '../../../components/HeroFeature'
import Container from '../../../components/Container'
import Column from '../../../components/Column'
import ListBlock from '../../../components/ListBlock'
import GridBlock from '../../../components/GridBlock'
import Media from '../../../components/Media'
import Button from '../../../components/Button'

import IntroContent from './intro.md'
import LearnContent from './learn.md'

class Pebble extends Component {
  componentWillMount() {
    this.state = {
      theme: {
        primary: color.pebble,
        secondary: color.white
      }
    }
    document.body.style.backgroundColor = this.state.theme.primary
    document.body.style.color = this.state.theme.secondary
  }

  render() {
    const involvement = [
      { name: 'Handcrafted letterforms on paper' },
      { name: 'Glyph design within Illustrator' },
      { name: 'Font creation with Glyphs' }
    ]
    return (
      <div>
        <HeroFeature headline='Metrik: a geometric typeface' image='metrik' color={this.state.theme.primary}/>
        <Container>
          <Column width='third'>
            <Button text='Download coming soon' icon='download' color='metrik' />
          </Column>
          <Column
            width='twoThird'
            intro='Metrik is a geometric typeface built from the ground up with the simplest of shapes.'
            content={IntroContent}>
            <ListBlock
              title='Project Involvement'
              intro="Metrik is a typeface I've created as a way to learn and appreciate typography further."
              items={involvement} />
          </Column>
        </Container>
        <hr />
      </div>
    )
  }
}

export default Pebble
