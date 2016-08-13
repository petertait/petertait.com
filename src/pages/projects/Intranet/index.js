import React, { Component, PropTypes } from 'react'

import { color, type } from '../../../vars'

import HeroFeature from '../../../components/HeroFeature'
import Container from '../../../components/Container'
import Column from '../../../components/Column'
import ClientLogo from '../../../components/ClientLogo'
import ProjectDetails from '../../../components/ProjectDetails'
import ProjectImage from '../../../components/ProjectImage'

import Intro from './intro.md'
import Design from './design.md'

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
            intro='An agile designer with a focus on an interactive and refined process.'
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
            <ProjectImage
              url='../images/work/intranet/responsive-devices.png'
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
            content={Design} />
          <Column width='full'>
            <ProjectImage
              url='../images/work/intranet/components.png'
              alt='Intranet shown on multiple devices' />
          </Column>
        </Container>
        <hr />
        <Container>
          <Column
            width='third'
            headline='A brand that communicates a new direction.' />
          <Column
            width='twoThird'
            content={Design} />
        </Container>
      </div>
    )
  }
}

const styles = {

}

export default Intranet
