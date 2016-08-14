import React, { Component, PropTypes } from 'react'

import { color } from '../../../vars'

import HeroFeature from '../../../components/HeroFeature'
import Container from '../../../components/Container'
import Column from '../../../components/Column'
import ClientLogo from '../../../components/ClientLogo'
import ProjectDetails from '../../../components/ProjectDetails'
import Image from '../../../components/Image'

import Intro from './intro.md'
import Design from './design.md'
import System from './system.md'
import Brand from './brand.md'

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
            content={Intro}>
            <ProjectDetails title='Project Involvement' items={involvement} />
          </Column>
        </Container>
        <hr />
        <Container>
          <Column
            width='third'
            headline='User-centered design for a global audience. Built up from an MVP into a product.' />
          <Column
            width='twoThird'
            content={Design} />
          <Column width='full'>
            <Image
              position='marginBottomNegative'
              url='../images/work/nucleus/devices.png'
              alt='Intranet shown on multiple devices' />
          </Column>
        </Container>
        <hr />

      </div>
    )
  }
}

export default Education
