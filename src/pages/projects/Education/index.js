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
import Button from '../../../components/Button'
import Process from '../../../components/Process'

import IntroContent from './intro.md'
import ProductContent from './product.md'
import VideoContent from './video.md'
import FasttrackContent from './fasttrack.md'

class Education extends Component {
  componentWillMount() {
    this.state = {
      theme: {
        primary: color.education,
        secondary: color.white
      }
    }
    document.body.style.backgroundColor = this.state.theme.primary
    document.body.style.color = this.state.theme.secondary
  }

  play() {
    const audio = document.getElementById('audio')
    audio.play()
  }

  render() {
    const involvement = [
      { name: 'Workflows + product mapping' },
      { name: 'Wireframing' },
      { name: 'Art + film direction' },
      { name: 'Lead design' },
      { name: 'Illustration' },
      { name: 'Lead frontend development' },
      { name: 'Responsive webapp design' }
    ]
    const processDiscover = [
      { name: 'Client workshops' },
      { name: 'Current market alternatives' }
    ]
    const processAnalyse = [
      { name: 'Team workshop' },
      { name: 'Product map' },
      { name: 'Concepts' }
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
        <HeroFeature headline='Workforce Education for the Digital Age' image='education' color={this.state.theme.primary} />
        <Container>
          <Column width='third'>
            <ClientLogo client='pearson' />
          </Column>
          <Column
            width='twoThird'
            intro='Pearson wanted a new way to educate a workforce and increase their reach across a larger audience.'
            content={IntroContent}>
            <Block
              border='solid'
              title='Involvement'
              intro='My involvement consisted of being the sole designer, overseeing the art direction and design. This included the creation of wireframes, product maps, prototypes including leading the frontend development for production – whilst dealing with the client day-to-day using an agile process.'>
              <List items={involvement} />
            </Block>
          </Column>
        </Container>
        <hr />
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
            headline='Brief: Transformation from an 800+ powerpoint to an energetic and educational product.' />
          <Column
            width='twoThird'
            content={ProductContent} />
          <Column width='full'>
            <Media
              media='image'
              position='marginBottomNegative'
              url='../images/work/education/devices.png'
              alt='Pearson Education Course shown on multiple devices' />
          </Column>
        </Container>
        <hr />
        <Media
          media='video'
          url='../media/work/education/demo.mp4'
          type='background'
          gradient='true'
          color={this.state.theme.primary} />
        <Container>
          <Column
            width='third'
            headline='Through gamification users were challenged to want to learn.' />
          <Column
            width='twoThird'
            content={FasttrackContent}>
          </Column>
          <Column width='full'>
            <Media
              url='../images/work/education/devices-responsive.png'
              alt='Pearson Course shown on multiple devices' />
          </Column>
        </Container>
        <hr />
        <Container>
          <Column
            width='third'
            headline='Enough with the text. With talking head videos, users felt engaged again.' />
          <Column
            width='twoThird'
            content={VideoContent}>
            <Button
              click={this.play.bind(this)}
              text='Play Sample Voiceover'
              icon='play'
              color='education' />
            <audio id='audio' preload='auto'>
              <source src='../media/work/education/voiceover.mp3' type='audio/mp3' />
              <source src='../media/work/education/voiceover.wav' type='audio/wav' />
            </audio>
          </Column>
          <Column width='full'>
            <Media
              media='image'
              url='../images/work/education/devices-video.png'
              alt='Pearson Education Course shown on multiple devices' />
          </Column>
        </Container>
        <hr />
        <Container>
          <Column
            width='full'
            headline='Related projects'>
            <BlockGrid
              title='Nucleus Intranet'
              client='AstraZeneca'
              url='/work/nucleus'
              path='nucleus' />
            <BlockGrid
              title='Metrik Typeface'
              client='Side Project'
              url='/work/metrik'
              path='metrik' />
            <BlockGrid
              title='People Search App'
              client='AstraZeneca'
              url='/work/people-search'
              path='people' />
          </Column>
        </Container>
      </div>
    )
  }
}

export default Education
