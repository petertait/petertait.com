import React, { Component, PropTypes } from 'react'

import { color } from '../../../vars'

import HeroFeature from '../../../components/HeroFeature'
import Container from '../../../components/Container'
import Column from '../../../components/Column'
import ClientLogo from '../../../components/ClientLogo'
import ListBlock from '../../../components/ListBlock'
import Image from '../../../components/Image'
import Video from '../../../components/Video'
import Button from '../../../components/Button'

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

    return (
      <div>
        <HeroFeature headline='Workforce Education for the Digital Age' image='education' />
        <Container>
          <Column width='third'>
            <ClientLogo client='pearson' />
          </Column>
          <Column
            width='twoThird'
            intro='Pearson wanted a new way to educate a workforce and increase their reach across a larger audience.'
            content={IntroContent}>
            <ListBlock title='Project Involvement' items={involvement} />
          </Column>
        </Container>
        <hr />
        <Container>
          <Column
            width='third'
            headline='Brief: Transformation from an 800+ powerpoint to an energetic and educational product.' />
          <Column
            width='twoThird'
            content={ProductContent} />
          <Column width='full'>
            <Image
              position='marginBottomNegative'
              url='../images/work/education/devices.png'
              alt='Pearson Education Course shown on multiple devices' />
          </Column>
        </Container>
        <hr />
        <Video
          url='../media/work/education/demo.mp4'
          alt='Pearson Education Course shown on multiple devices'
          type='background'
          color='education'
          />
        <Container>
          <Column
            width='third'
            headline='Through gamification users were challenged to want to learn.' />
          <Column
            width='twoThird'
            content={FasttrackContent}>
          </Column>
          <Column width='full'>
            <Image
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
            <Image
              url='../images/work/education/devices-video.png'
              alt='Pearson Education Course shown on multiple devices' />
          </Column>
        </Container>
      </div>
    )
  }
}

export default Education