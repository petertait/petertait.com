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
            url='/work/nucleus'
            path='nucleus' />
          <GridBlock
            title='Remote Education Product'
            client='Pearson'
            url='/work/remote-education'
            path='education' />
          <GridBlock
            title='People Search App'
            client='AstraZeneca'
            url='/work/people-search'
            path='people' />
          <GridBlock
            title='Metrik Typeface'
            client='Side Project'
            url='/work/metrik'
            path='metrik' />
          <GridBlock
            title='Customer Satisfaction App'
            client='National Express'
            url='/work/customer-satisfaction'
            path='express' />
          <GridBlock
            title='Experiments + Hack Days'
            client='Various Clients'
            url='/work/experiments'
            path='experiments'
            nthChild='lastChild'  />
        </div>
      </div>
    )
  }
}

export default Work
