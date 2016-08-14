import React, { Component, PropTypes } from 'react'

import { color } from '../../../vars'

import HeroFeature from '../../../components/HeroFeature'
import Container from '../../../components/Container'
import Column from '../../../components/Column'
import Gallery from '../../../components/Gallery'
import ClientLogo from '../../../components/ClientLogo'
import ListBlock from '../../../components/ListBlock'
import Image from '../../../components/Image'

import IntroContent from './intro.md'
import ProductContent from './product.md'
import VideoContent from './video.md'

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
    const screens = [
      { url: 'http://placehold.it/350x150', alt: 'this is an image' },
      { url: 'http://placehold.it/350x150', alt: 'this is an image1' },
      { url: 'http://placehold.it/350x150', alt: 'this is an image2' },
      { url: 'http://placehold.it/350x150', alt: 'this is an image3' }
    ]
    return (
      <div>
        <Gallery images={screens}/>
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
        <Container>
          <Column
            width='third'
            headline='Enough with the text. With talking head videos, users felt engaged again.' />
          <Column
            width='twoThird'
            content={VideoContent} />
          <Column width='full'>
          <Image
            url='../images/work/education/devices-video.png'
            alt='Pearson Education Course shown on multiple devices' />
          </Column>
        </Container>
        <hr />
      </div>
    )
  }
}

export default Education
