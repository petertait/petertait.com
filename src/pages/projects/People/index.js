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

class People extends Component {
  componentWillMount() {
    this.state = {
      theme: {
        primary: color.people,
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
      { name: 'Titanium iOS development' }
    ]
    const processDiscover = [
      { name: 'Client workshops' },
      { name: 'Current workflow' }
    ]
    const processAnalyse = [
      { name: 'Team workshop' },
      { name: 'Product map' },
      { name: 'Concepts' },
      { name: 'Understand Titanium' }
    ]
    const processDevelop = [
      { name: 'Wireframes' },
      { name: 'Hi-fi designs' },
      { name: 'Prototypes + MVP' }
    ]
    const processOutcome = [
      { name: 'MVP released' },
      { name: 'Handover + training' }
    ]
    return (
      <div>
        <HeroFeature headline='Consumer Grade Search for the Enterprise' image='people' color={this.state.theme.primary} />
        <Container>
          <Column width='third'>
            <ClientLogo client='astrazeneca' />
          </Column>
          <Column
            width='twoThird'
            intro='AstraZeneca needed an easy way for their workforce to communicate across multiple continents.'
            content={IntroContent}>
            <Block
              border='solid'
              title='Involvement'
              intro='As the lead design on the project, I led the design from the initial ideas stage to prototyping and production level frontend development – using the Titanium framework.'>
              <List items={involvement} />
            </Block>
          </Column>
        </Container>
        <hr />
        <Media
          media='video'
          url='../media/work/people/demo.mp4'
          type='background'
          gradient='true'
          color={this.state.theme.primary} />
        <Container>
          <Column width='full'>
            <Block
              type='processFeature'
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
            headline='User-centered, consumer grade quality for an enterprise audience.' />
          <Column
            width='twoThird'
            content={DesignContent} />
          <Column width='full'>
            <Media
              media='image'
              position='marginBottomNegative'
              url='../images/work/people/devices.png'
              alt='The different screens of the People Search App' />
          </Column>
        </Container>
        <hr />
        <Container>
          <Column
            width='full'
            headline='Related projects'>
            <BlockGrid
              title='Experiments + Hack Days'
              client='Various Clients'
              url='/work/experiments'
              path='experiments' />
            <BlockGrid
              title='Nucleus Intranet'
              client='AstraZeneca'
              url='/work/nucleus'
              path='nucleus' />
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

export default People
