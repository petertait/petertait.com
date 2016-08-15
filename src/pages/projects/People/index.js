import React, { Component, PropTypes } from 'react'

import { color } from '../../../vars'

import HeroFeature from '../../../components/HeroFeature'
import Container from '../../../components/Container'
import Column from '../../../components/Column'
import ClientLogo from '../../../components/ClientLogo'
import ListBlock from '../../../components/ListBlock'
import GridBlock from '../../../components/GridBlock'
import Image from '../../../components/Image'
import Video from '../../../components/Video'

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
        <HeroFeature headline='Consumer Grade Search for the Enterprise' image='people' />
        <Container>
          <Column width='third'>
            <ClientLogo client='astrazeneca' />
          </Column>
          <Column
            width='twoThird'
            intro='AstraZeneca needed an easy way for their workforce to communicate across multiple continents.'
            content={IntroContent}>
            <ListBlock title='Project Involvement' items={involvement} />
          </Column>
        </Container>
        <hr />
        <Video
          url='../media/work/people/demo.mp4'
          alt='Pearson Education Course shown on multiple devices'
          type='background'
          color='people'
          />
        <Container>
          <Column
            width='third'
            headline='User-centered, consumer grade quality for an enterprise audience.' />
          <Column
            width='twoThird'
            content={DesignContent} />
          <Column width='full'>
            <Image
              url='../images/work/people/devices.png'
              alt='The different screens of the People Search App' />
          </Column>
        </Container>
      </div>
    )
  }
}

export default People
