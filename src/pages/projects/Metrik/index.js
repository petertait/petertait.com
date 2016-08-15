import React, { Component, PropTypes } from 'react'

import { color } from '../../../vars'

import HeroFeature from '../../../components/HeroFeature'
import Container from '../../../components/Container'
import Column from '../../../components/Column'
import ListBlock from '../../../components/ListBlock'
import GridBlock from '../../../components/GridBlock'
import Media from '../../../components/Media'
import Vimeo from '../../../components/Vimeo'
import Button from '../../../components/Button'

import IntroContent from './intro.md'
import DesignContent from './design.md'
import AnalyticsContent from './analytics.md'

class Metrik extends Component {
  componentWillMount() {
    this.state = {
      theme: {
        primary: color.metrik,
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
      { name: 'Built with React' }
    ]
    return (
      <div>
        <HeroFeature headline='Metrik: a geometric typeface' image='metrik' />
        <Container>
          <Column width='third'>
            <Button text='Download coming soon' icon='download' color='metrik' />
          </Column>
          <Column
            width='twoThird'
            intro='Through digital transformation, National Metrik can now manage customer satisfaction on a larger scale with insightful analytics.'
            content={IntroContent}>
            <ListBlock
              title='Project Involvement'
              intro='As lead design on the project my involvement ranged from initial ideas stage, communicating daily with the client to production frontend development. An agile process helped with rapid and continuous development.'
              items={involvement} />
          </Column>
        </Container>
        <hr />
        <Media
          media='image'
          url='../images/work/metrik/feature.jpg'
          type='background'
          gradient='true'
          color='metrik' />
        <Container>
          <Column
            width='third'
            headline='Responsive, scalable and fast. An application built for efficiency.' />
          <Column
            width='twoThird'
            content={DesignContent}>
            <Vimeo url='https://player.vimeo.com/video/132186891?color=00bc6c&title=0&byline=0&portrait=0' />
          </Column>
        </Container>
        <Media
          media='image'
          url='../images/work/metrik/shapes.svg'
          alt='Showing Analytics within the National Metrik app' />
      </div>
    )
  }
}

export default Metrik
