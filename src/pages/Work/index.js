import React, { Component, PropTypes } from 'react'
import LazyLoad from 'react-lazy-load';
import Fluffy from '../../vendor/fluffy'

import { color } from '../../vars'

import Hero from '../../components/Hero'
import GridBlock from '../../components/GridBlock'

class Work extends Component {
  componentWillMount() {
    this.state = {
      theme: {
        primary: color.black,
        secondary: color.white
      }
    }
    document.body.style.backgroundColor = this.state.theme.primary
    document.body.style.color = this.state.theme.secondary
  }

  render() {
    return (
      <div>
        <Hero headline='Selected Works.' />
        <div className='container'>
          <GridBlock
            title='Global Intranet'
            summary='Lead design and frontend developer of a global intranet spanning over 10 languages and 80 thousand daily users.'
            project='intranet'
            color='intranet' />
          <GridBlock
            title='Remote Education App'
            summary='Creation of a new way in educating a workforce remotely.'
            project='remote-education'
            color='education' />
          <GridBlock
            title='Metrik Typeface'
            summary='A geometric display typeface built for unique brands.'
            project='metrik'
            color='metrik' />
          <GridBlock
            title='People Search App'
            summary='An iOS app for searching colleagues within a global corporation.'
            project='people-search'
            color='people' />
          <GridBlock
            title='Agile Rebrand'
            summary='Rebrand for an innovative agile transformation.'
            project='agile-rebrand'
            color='agile' />
          <GridBlock
            title='Customer Satisfaction App'
            summary='Digital transformation of how National Express measure customer satisfaction.'
            project='customer-satisfaction'
            color='express' />
          <GridBlock
            title="pebble {code}'s Website"
            summary='Website overhaul for pebble {code} with a focus on events and culture.'
            project='pebble'
            color='pebble' />
          <GridBlock
            title='Experiments'
            summary='A bunch of experiments from side projects and hack days.'
            color='blue' />
        </div>
      </div>
    )
  }
}

export default Work
