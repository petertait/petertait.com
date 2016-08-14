import React, { Component, PropTypes } from 'react'

import { color, breakpoint } from '../../../vars'

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

class Intranet extends Component {
  componentWillMount() {
    this.state = {
      theme: {
        primary: color.intranet,
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
      { name: 'User testing' },
      { name: 'Lead design' },
      { name: 'Branding' },
      { name: 'Lead frontend development' },
      { name: 'Site Optimisation' },
      { name: 'Responsive Webapp Design' }
    ]
    return (
      <div>
        <HeroFeature headline='Unifying Internal Communication at AstraZeneca' image='intranet' />
        <Container>
          <Column width='third'>
            <ClientLogo client='astrazeneca' />
          </Column>
          <Column
            width='twoThird'
            intro='Inconsistencies in communication hampered the business process. AstraZeneca needed a scalable platform to share insights.'
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
              url='../images/work/intranet/devices.png'
              alt='Intranet shown on multiple devices' />
          </Column>
        </Container>
        <hr />
        <Container>
          <Column
            width='third'
            headline='Unifiying communication into one central system.'>
          </Column>
          <Column
            width='twoThird'
            content={System} />
          <Column width='full'>
            <Image
              url='../images/work/intranet/components.png'
              alt='Intranet is made up of many different components' />
          </Column>
        </Container>
        <hr />
        <Container>
          <Column
            width='third'
            headline='A brand that communicates a new direction.' />
          <Column
            width='twoThird'
            content={Brand}>
            <Image
              type='background'
              url='../images/work/intranet/atom.svg'
              alt=' ' />
            <Image
              type='logo'
              url='../images/work/intranet/logo.svg'
              alt='Nucleus logo in monotone' />
          </Column>
        </Container>
      </div>
    )
  }
}

const styles = {
}

export default Intranet
