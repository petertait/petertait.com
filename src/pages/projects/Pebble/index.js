import React, { Component, PropTypes } from 'react'

import { color } from '../../../vars'

import HeroFeature from '../../../components/HeroFeature'
import Container from '../../../components/Container'
import Column from '../../../components/Column'
import BlockList from '../../../components/BlockList'
import BlockGrid from '../../../components/BlockGrid'
import ClientLogo from '../../../components/ClientLogo'
import Media from '../../../components/Media'
import Button from '../../../components/Button'

import IntroContent from './intro.md'
import DesignContent from './design.md'
import PerformanceContent from './performance.md'
import IllustrationsContent from './illustrations.md'

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
      { name: 'Lead design' },
      { name: 'Development of Jekyll site' },
      { name: 'Brand illustrations' }
    ]
    return (
      <div>
        <HeroFeature headline='Startups + Enterprise Unite' image='pebble' color={this.state.theme.primary} />
        <Container>
          <Column width='third'>
            <ClientLogo client='pebble' />
          </Column>
          <Column
            width='twoThird'
            intro='As part of a website refresh for pebble {code} the target was to unite startups and enterprise.'
            content={IntroContent}>
            <BlockList
              title='Project Involvement'
              intro="I was lead design on the refresh and building of the website. Designed between whiteboards and Sketch, created with Jekyll."
              items={involvement} />
          </Column>
        </Container>
        <hr />
        <Container>
          <Column
            width='third'
            headline='Bold and uncomplicated design.' />
          <Column
            width='twoThird'
            content={DesignContent} />
          <Column width='full'>
            <Media
              media='image'
              position='marginBottomNegative'
              url='../images/work/pebble/browser.png'
              alt='Full size of the pebble {code} website' />
          </Column>
        </Container>
        <hr />
        <Container>
          <Column
            width='third'
            headline='Mobile first, built for performance.' />
          <Column
            width='twoThird'
            content={PerformanceContent} />
          <Column width='full'>
            <Media
              media='image'
              position='marginBottomNegative'
              url='../images/work/pebble/devices.png'
              alt='The different screens of the pebble {code} website' />
          </Column>
        </Container>
        <hr />
        <Container>
          <Column
            width='third'
            headline='Fun and vibrant illustrations that are full of character.' />
          <Column
            width='twoThird'
            content={IllustrationsContent} />
          <Column width='full'>
            <Media
              media='image'
              url='../images/work/pebble/illustrations.png'
              alt='Illustrations created for the pebble {code} brand' />
          </Column>
        </Container>
        <hr />
        <Container>
          <Column
            width='full'
            headline='Related projects'>
            <BlockGrid
              title='Customer Satisfaction App'
              client='National Express'
              url='/work/customer-satisfaction'
              path='express' />
            <BlockGrid
              title='Metrik Typeface'
              client='Side Project'
              url='/work/metrik'
              path='metrik' />
            <BlockGrid
              title='Remote Education Product'
              client='Pearson'
              url='/work/remote-education'
              path='education' />
          </Column>
        </Container>
      </div>
    )
  }
}

export default Pebble