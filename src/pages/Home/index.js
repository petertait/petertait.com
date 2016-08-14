import React, { Component, PropTypes } from 'react'

import { color } from '../../vars'

import Hero from '../../components/Hero'
import Services from '../../components/Services'
import ListItem from '../../components/ListItem'

class Home extends Component {
  componentWillMount() {
    this.state = {
      theme: {
        primary: color.blue,
        secondary: color.white
      }
    }
    document.body.style.backgroundColor = this.state.theme.primary
    document.body.style.color = this.state.theme.secondary
  }

  render() {
    return (
      <div>
        <Hero headline='Multifunctional designer/developer based in Bath — a traditionally trained designer that codes.' link='/about' linkText='Discover more about me' />
        <Services />
        <div className='container'>
          <h3>Selected Work</h3>
          <ListItem title='Nucleus: Global Intranet' summary='Lead design of a global intranet for AstraZeneca spanning over 10 languages and 80 thousand daily users.' link='/work/nucleus' />
          <ListItem title='Remote Education Course' summary='Creation of a new way in educating a workforce remotely for Pearson Educaiton.' link='/' />
          <ListItem title='Metrik' summary='A geometric display typeface built for unique brands.' link='/' />
          <ListItem title='Global People Search' summary='An iOS app for searching colleagues within a AstraZeneca.' link='/' />
          <ListItem title='Customer Satisfaction App' summary='Digital transformation of how National Express measure and maintain customer satisfaction.' link='/' />
        </div>
      </div>
    )
  }
}

export default Home
