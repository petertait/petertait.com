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
import Anchor from '../../../components/Anchor'

import IntroContent from './intro.md'
import APMContent from './apm.md'
import TemplarsContent from './templars.md'
import TraditionContent from './tradition.md'

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
          <Column width='third'/>
          <Column
            width='twoThird'
            intro='Beyond applications, I have created brochure and marketing websites for a multitude of clients and target audiences.'
            content={IntroContent}>
          </Column>
        </Container>
        <hr />
        <Container>
          <Column
            width='third'
            headline='APM Technologies'>
            <Anchor url='http://apmtechnologies.com' text='Visit the site' margin='topBottom' />
          </Column>
          <Column
            width='twoThird'
            content={APMContent} />
          <Column width='full'>
            <Media
              media='image'
              position='marginBottomNegative'
              url='../images/work/websites/apm.png'
              alt='Full size of the APM website' />
          </Column>
        </Container>
        <hr />
        <Container>
          <Column
            width='third'
            headline='Templars Weddings'>
            <Anchor url='http://templarsweddings.com' text='Visit the site' margin='topBottom' />
          </Column>
          <Column
            width='twoThird'
            content={TemplarsContent} />
          <Column width='full'>
            <Media
              media='image'
              position='marginBottomNegative'
              url='../images/work/websites/templars.png'
              alt='Full size of the Templars Weddings website' />
          </Column>
        </Container>
        <hr />
        <Container>
          <Column
            width='third'
            headline='New Tradition'>
            <Anchor url='http://newtradition.co.uk' text='Visit the site' margin='topBottom' />
          </Column>
          <Column
            width='twoThird'
            content={TraditionContent} />
          <Column width='full'>
            <Media
              media='image'
              position='marginBottomNegative'
              url='../images/work/websites/tradition.png'
              alt='Full size of the New Tradition website' />
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
              title="pebble {code}'s Website"
              client='pebble {code}'
              url='/work/pebble'
              path='pebble' />
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
