import React, { Component, PropTypes } from 'react'

import { color } from '../../../vars'

import HeroFeature from '../../../components/HeroFeature'
import Container from '../../../components/Container'
import Column from '../../../components/Column'
import ClientLogo from '../../../components/ClientLogo'
import ListBlock from '../../../components/ListBlock'
import GridBlock from '../../../components/GridBlock'
import Media from '../../../components/Media'

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
    return (
      <div>
        <HeroFeature headline='Consumer Grade Search for the Enterprise' image='people' color={color.people} />
        <Container>
          <Column width='third'>
            <ClientLogo client='astrazeneca' />
          </Column>
          <Column
            width='twoThird'
            intro='AstraZeneca needed an easy way for their workforce to communicate across multiple continents.'
            content={IntroContent}>
            <ListBlock
              title='Project Involvement'
              intro='As the lead design on the project, I led the design from the initial ideas stage to prototyping and production level frontend development – using the Titanium framework.'
              items={involvement} />
          </Column>
        </Container>
        <hr />
        <Media
          media='video'
          url='../media/work/people/demo.mp4'
          type='background'
          gradient='true'
          color={color.people} />
        <Container>
          <Column
            width='third'
            headline='User-centered, consumer grade quality for an enterprise audience.' />
          <Column
            width='twoThird'
            content={DesignContent} />
          <Column width='full'>
            <Media
              media='image'
              url='../images/work/people/devices.png'
              alt='The different screens of the People Search App' />
          </Column>
        </Container>
        <hr />
        <Container>
          <Column
            width='full'
            headline='Related projects'>
            <GridBlock
              title='Experiments + Hack Days'
              client='Various Clients'
              url='/work/experiments'
              path='experiments' />
            <GridBlock
              title='Nucleus Intranet'
              client='AstraZeneca'
              url='/work/nucleus'
              path='nucleus' />
            <GridBlock
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
