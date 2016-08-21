import React, { Component, PropTypes } from 'react'

import { color } from '../../../vars'

import HeroFeature from '../../../components/HeroFeature'
import Container from '../../../components/Container'
import Column from '../../../components/Column'
import ClientLogo from '../../../components/ClientLogo'
import Block from '../../../components/Block'
import List from '../../../components/List'
import BlockGrid from '../../../components/BlockGrid'
import Media from '../../../components/Media'
import Process from '../../../components/Process'

import IntroContent from './intro.md'
import DesignContent from './design.md'
import AnalyticsContent from './analytics.md'

class Express extends Component {
  componentWillMount() {
    this.state = {
      theme: {
        primary: color.express,
        secondary: color.white
      }
    }
    document.body.style.backgroundColor = this.state.theme.primary
    document.body.style.color = this.state.theme.secondary
  }

  render() {
    const involvement = [
      { name: 'Workflows + product mapping' },
      { name: 'Wireframing' },
      { name: 'Lead design' },
      { name: 'Lead frontend development' },
      { name: 'Built with React' }
    ]
    const processDiscover = [
      { name: 'Client workshops' },
      { name: 'Current product map' },
      { name: 'Current workflow' }
    ]
    const processAnalyse = [
      { name: 'Team workshop' },
      { name: 'Product map' },
      { name: 'Concepts' },
      { name: 'Understand API data' }
    ]
    const processDevelop = [
      { name: 'Wireframes' },
      { name: 'Hi-fi designs' },
      { name: 'Prototypes + MVP' },
      { name: 'Develop product with continuous releases' }
    ]
    const processOutcome = [
      { name: 'Product released' },
      { name: 'Handover + training' }
    ]
    return (
      <div>
        <HeroFeature headline='Improving Customer Satisfaction through Digital Transformation' image='express' color={this.state.theme.primary} />
        <Container>
          <Column width='third'>
            <ClientLogo client='express' />
          </Column>
          <Column
            width='twoThird'
            intro='Through digital transformation, National Express can now manage customer satisfaction on a larger scale with insightful analytics.'
            content={IntroContent}>
            <Block
              border='solid'
              title='Project Involvement'
              intro='As lead design on the project my involvement ranged from initial ideas stage, communicating daily with the client to production frontend development. An agile process helped with rapid and continuous development.'>
              <List items={involvement} />
            </Block>
          </Column>
        </Container>
        <hr />
        <Media
          media='video'
          url='../media/work/express/demo.mp4'
          type='background'
          gradient='true'
          color={this.state.theme.primary} />
        <Container>
          <Column width='full'>
            <Block
              type='process'
              border='solid'
              title='Process'>
              <Process
                title='Discover'
                items={processDiscover} />
              <Process
                title='Analyse'
                items={processAnalyse} />
              <Process
                title='Develop'
                items={processDevelop} />
              <Process
                title='Outcome'
                items={processOutcome} />
            </Block>
          </Column>
          <Column
            width='third'
            headline='Responsive, scalable and fast. An application built for efficiency.' />
          <Column
            width='twoThird'
            content={DesignContent} />
          <Column width='full'>
            <Media
              media='image'
              position='marginBottomNegative'
              url='../images/work/express/devices.png'
              alt='Responsive screens of the app' />
          </Column>
        </Container>
        <hr />
        <Container>
          <Column
            width='third'
            headline='Information is power. Through analytics, National Express can spot pain points and act on them.' />
          <Column
            width='twoThird'
            content={AnalyticsContent} />
          <Column width='full'>
            <Media
              media='image'
              url='../images/work/express/devices-analytics.png'
              alt='Showing Analytics within the National Express app' />
          </Column>
        </Container>
        <hr />
        <Container>
          <Column
            width='full'
            headline='Related projects'>
            <BlockGrid
              title='People Search App'
              client='AstraZeneca'
              url='/work/people-search'
              path='people' />
            <BlockGrid
              title='Remote Education Product'
              client='Pearson'
              url='/work/remote-education'
              path='education' />
            <BlockGrid
              title='Metrik Typeface'
              client='Side Project'
              url='/work/metrik'
              path='metrik' />
          </Column>
        </Container>
      </div>
    )
  }
}

export default Express
