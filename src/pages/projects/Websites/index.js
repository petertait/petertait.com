import React, { Component, PropTypes } from 'react'

import { color } from '../../../vars'

import HeroFeature from '../../../components/HeroFeature'
import Container from '../../../components/Container'
import Column from '../../../components/Column'
import Block from '../../../components/Block'
import List from '../../../components/List'
import BlockGrid from '../../../components/BlockGrid'
import ClientLogo from '../../../components/ClientLogo'
import Media from '../../../components/Media'
import Button from '../../../components/Button'

import IntroContent from './intro.md'

class Websites extends Component {
  componentWillMount() {
    this.state = {
      theme: {
        primary: color.websites,
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
        <HeroFeature headline='Marketing Websites' image='websites' color={this.state.theme.primary} />
        <Container>
          <Column width='third'>
            <ClientLogo client='pebble' />
          </Column>
          <Column
            width='twoThird'
            intro='As part of a website refresh for pebble {code} the target was to unite startups and enterprise.'
            content={IntroContent}>
            <Block
              border='solid'
              title='Involvement'
              intro='I was lead design on the refresh and building of the website. Designed between whiteboards and Sketch, created with Jekyll.'>
              <List items={involvement} />
            </Block>
          </Column>
        </Container>
        <hr />
        <Container>
          <Column
            width='third'
            headline='APM Technologies' />
          <Column
            width='twoThird'
            content={IntroContent} />
          <Column width='full'>
            <Media
              media='image'
              position='marginBottomNegative'
              url='../images/work/pebble/browser.png'
              alt='Full size of the APM website' />
          </Column>
        </Container>
        <hr />
        <Container>
          <Column
            width='third'
            headline='Templars Weddings' />
          <Column
            width='twoThird'
            content={IntroContent} />
          <Column width='full'>
            <Media
              media='image'
              position='marginBottomNegative'
              url='../images/work/pebble/browser.png'
              alt='Full size of the APM website' />
          </Column>
        </Container>
        <hr />
        <Container>
          <Column
            width='third'
            headline='New Tradition' />
          <Column
            width='twoThird'
            content={IntroContent} />
          <Column width='full'>
            <Media
              media='image'
              position='marginBottomNegative'
              url='../images/work/pebble/browser.png'
              alt='Full size of the APM website' />
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

export default Websites
