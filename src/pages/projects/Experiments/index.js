import React, { Component, PropTypes } from 'react'

import { color } from '../../../vars'

import HeroFeature from '../../../components/HeroFeature'
import Container from '../../../components/Container'
import Column from '../../../components/Column'
import BlockGrid from '../../../components/BlockGrid'
import BlockList from '../../../components/BlockList'
import Media from '../../../components/Media'
import Anchor from '../../../components/Anchor'
import Button from '../../../components/Button'

import IntroContent from './intro.md'
import PatientContent from './patient.md'
import BeaconContent from './beacon.md'
import PokeyContent from './pokey.md'

class Experiments extends Component {
  componentWillMount() {
    this.state = {
      theme: {
        primary: color.experiments,
        secondary: color.black
      }
    }
    document.body.style.backgroundColor = this.state.theme.primary
    document.body.style.color = this.state.theme.secondary
  }

  render() {
    const patientInvolvement = [
      { name: 'Lead design' },
      { name: 'Frontend development' },
      { name: 'Built with React + Cordova' },
      { name: 'Hackathon winner' }
    ]
    return (
      <div>
        <HeroFeature headline='Experiments + Hack Days' image='experiments' color={this.state.theme.primary} />
        <Container>
          <Column width='third'>
            <Anchor link='https://github.com/petertait' text='Github Profile' type='block' color='experiments' margin='bottom' />
          </Column>
          <Column
            width='twoThird'
            intro='Experimenting is a big part of my process – it helps everyone involved explore and validate ideas at speed.'
            content={IntroContent}>
          </Column>
        </Container>
        <hr />
        <Media
          media='image'
          url='../images/work/experiments/feature-patient.png'
          type='background'
          gradient='true'
          color={this.state.theme.primary} />
        <Container>
          <Column
            width='third'
            headline='Patient Engagement Hackathon' />
          <Column
            width='twoThird'
            content={PatientContent}>
            <BlockList
              title='Project Involvement'
              color='black'
              items={patientInvolvement} />
          </Column>
          <Column width='full'>
            <Media
              media='image'
              url='../images/work/experiments/devices-patient.png'
              position='marginBottomNegative'
              alt='Patient Engagement screenshots' />
          </Column>
        </Container>
        <hr />
        <Container>
          <Column
            width='third'
            headline='Curling with iBeacons' />
          <Column
            width='twoThird'
            content={BeaconContent}>
            <Anchor link='https://github.com/petertait/curling-hack-frontend' text='See source on Github' margin='topBottom' />
            <Media
              media='image'
              url='../images/work/experiments/devices-beacon.png'
              position='marginBottomNegative'
              alt='Patient Engagement screenshots' />
          </Column>
        </Container>
        <hr />
        <Container>
          <Column
            width='third'
            headline='Pokey' >
            <Button
            text='Download coming soon'
            icon='download'
            color='experiments'
            margin='bottom'
            type='block' />
          </Column>
          <Column
            width='twoThird'
            content={PokeyContent}>
            <Media
              media='image'
              url='../images/work/experiments/pokey.svg'
              type='border'
              color='black'
              alt='Pokey sample' />
            <Media
              media='image'
              url='../images/work/experiments/pokey-abc.svg'
              type='border'
              color='black'
              alt='Pokey entire alphabet' />
          </Column>
        </Container>
        <hr />
        <Container>
          <Column
            width='full'
            headline='Related projects'>
            <BlockGrid
              title="pebble {code}'s Website"
              client='pebble {code}'
              url='/work/pebble'
              path='pebble' />
            <BlockGrid
              title='Metrik Typeface'
              client='Side Project'
              url='/work/metrik'
              path='metrik' />
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

export default Experiments
