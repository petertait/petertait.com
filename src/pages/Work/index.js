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
            color='nucleus' />
          <GridBlock
            title='Remote Education Product'
            client='Pearson'
            url='remote-education'
            color='education' />
          <GridBlock
            title='People Search iOS App'
            client='AstraZeneca'
            url='people-search'
            color='people' />
          <GridBlock
            title='Metrik Typeface'
            client='Side Project'
            url='metrik'
            color='metrik' />
          <GridBlock
            title='Customer Satisfaction App'
            client='National Express'
            url='customer-satisfaction'
            color='express' />
          <GridBlock
            title='Experiments + Hack Days'
            client='Various Clients'
            url='experiments'
            color='blue' />
          <GridBlock
            title="pebble's Website"
            client='pebble {code}'
            url='pebble'
            color='pebble' />
          <GridBlock
            title='Agile Rebrand'
            client='AstraZeneca'
            url='agile-rebrand'
            color='agile'
            nthChild='lastChild' />
        </div>
      </div>
    )
  }
}

export default Work
