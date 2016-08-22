import React, { Component, PropTypes } from 'react'

import { color } from '../../vars'

import Hero from '../../components/Hero'
import Container from '../../components/Container'
import Column from '../../components/Column'
import BlockGrid from '../../components/BlockGrid'

class Work extends Component {
  componentWillMount() {
    this.state = {
      theme: {
        primary: color.sky,
        secondary: color.blue
      }
    }
    document.body.style.backgroundColor = this.state.theme.primary
    document.body.style.color = this.state.theme.secondary
  }

  render() {
    return (
      <div>
        <Hero headline='Selected Work.' />
        <Container>
          <Column width='full'>
            <BlockGrid
              title='Nucleus Intranet'
              client='AstraZeneca'
              url='/work/nucleus'
              path='nucleus' />
            <BlockGrid
              title='Remote Education Product'
              client='Pearson'
              url='/work/remote-education'
              path='education' />
            <BlockGrid
              title='People Search App'
              client='AstraZeneca'
              url='/work/people-search'
              path='people' />
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
            <BlockGrid
              title='Experiments + Hack Days'
              client='Various Clients'
              url='/work/experiments'
              path='experiments' />
            <BlockGrid
              title="pebble {code}'s Website"
              client='pebble {code}'
              url='/work/pebble'
              path='pebble' />
            <BlockGrid
              title="Marketing Websites"
              client='Various Clients'
              url='/work/marketing-websites'
              path='websites' />
          </Column>
        </Container>
      </div>
    )
  }
}

export default Work
