import React, { Component, PropTypes } from 'react'

import { color } from '../../vars'

import Hero from '../../components/Hero'
import GridBlock from '../../components/GridBlock'

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
        <div className='container'>
          <GridBlock
            title='Nucleus Intranet'
            client='AstraZeneca'
            url='nucleus'
            path='nucleus' />
          <GridBlock
            title='Remote Education Product'
            client='Pearson'
            url='remote-education'
            path='education' />
          <GridBlock
            title='People Search App'
            client='AstraZeneca'
            url='people-search'
            path='people' />
          <GridBlock
            title='Metrik Typeface'
            client='Side Project'
            url='metrik'
            path='metrik' />
          <GridBlock
            title='Customer Satisfaction App'
            client='National Express'
            url='customer-satisfaction'
            path='express' />
          <GridBlock
            title='Experiments + Hack Days'
            client='Various Clients'
            url='experiments'
            path='experiments' />
          <GridBlock
            title="pebble's Website"
            client='pebble {code}'
            url='pebble'
            path='pebble' />
          <GridBlock
            title='Agile Rebrand'
            client='AstraZeneca'
            url='agile-rebrand'
            path='agile'
            nthChild='lastChild' />
        </div>
      </div>
    )
  }
}

export default Work
