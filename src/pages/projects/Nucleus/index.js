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
import SystemContent from './system.md'
import BrandContent from './brand.md'

class Nucleus extends Component {
  componentWillMount() {
    this.state = {
      theme: {
        primary: color.nucleus,
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
      { name: 'Atomic design system' },
      { name: 'Responsive webapp design' }
    ]
    const processDiscover = [
      { name: 'Client workshops' },
      { name: 'Current product map' },
      { name: 'User interviews' }
    ]
    const processAnalyse = [
      { name: 'Team workshop' },
      { name: 'Product map' },
      { name: 'Concepts' }
    ]
    const processDevelop = [
      { name: 'Wireframes' },
      { name: 'Atomic design' },
      { name: 'Prototypes + MVP' },
      { name: 'Continuous improvement' }
    ]
    const processOutcome = [
      { name: 'Product with trained up internal team' },
      { name: 'Savings of over £1m' },
      { name: 'Handover + training' }
    ]
    return (
      <div>
        <HeroFeature headline='Unifying Internal Communication at AstraZeneca' image='nucleus' color={this.state.theme.primary} />
        <Container>
          <Column width='third'>
            <ClientLogo client='astrazeneca' />
          </Column>
          <Column
            width='twoThird'
            intro='Inconsistencies in communication hampered the business process. AstraZeneca needed a scalable platform to share insights.'
            content={IntroContent}>
            <Block
              border='solid'
              title='Involvement'
              intro='As the sole designer, I oversaw the entire design of the product from initial ideas stage to continuous development – including daily communication with product stakeholders. Beyond the product mapping, user-testing, prototyping and workshops, I also lead the frontend development of production code.'>
              <List items={involvement} />
            </Block>
          </Column>
        </Container>
        <hr />
        <Media
          url='../images/work/nucleus/feature.jpg'
          alt='Nucleus running on a laptop'
          gradient='true'
          type='background'
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
            headline='User-centered design for a global audience. Built up from an MVP into a product.' />
          <Column
            width='twoThird'
            content={DesignContent} />
          <Column width='full'>
            <Media
              position='marginBottomNegative'
              url='../images/work/nucleus/devices.png'
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
            content={SystemContent} />
          <Column width='full'>
            <Media
              media='image'
              url='../images/work/nucleus/components.png'
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
            content={BrandContent}>
            <Media
              media='image'
              type='border'
              url='../images/work/nucleus/logo.svg'
              alt='Nucleus logo in monotone' />
          </Column>
        </Container>
        <hr />
        <Container>
          <Column
            width='full'
            headline='Related projects'>
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
            <BlockGrid
              title='Customer Satisfaction App'
              client='National Express'
              url='/work/customer-satisfaction'
              path='express' />
          </Column>
        </Container>
      </div>
    )
  }
}

export default Nucleus
