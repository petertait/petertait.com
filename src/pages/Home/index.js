import React, { Component, PropTypes } from 'react'

import { color } from '../../vars'

import Hero from '../../components/Hero'
import Container from '../../components/Container'
import Column from '../../components/Column'
import BlockFeature from '../../components/BlockFeature'
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
        <Hero headline='Multifunctional designer/developer based in Bath — a traditionally trained designer that codes.' link='/about' text='Discover more about me' />
        <hr />
        <Container>
          <Column
            width='full'
            display='flex'
            title='Services'>
            <BlockFeature
              width='third'
              image='images/eye.svg'
              title='Print, branding &amp; graphic design'
              summary='Modern design mixed with the theory of traditional graphic design.' />
            <BlockFeature
              width='third'
              nthChild='odd'
              image='images/design.svg'
              title='Application &amp; website design'
              summary='User-centered website and application design. Using Agile methods to produce quick and effective results.' />
            <BlockFeature
              width='third'
              image='images/code.svg'
              title='Front-end development'
              summary='The entire process from rapid prototyping, visual concepts to a fully functional live product.' />
          </Column>
        </Container>
        <hr />
        <Container>
          <Column
            width='full'
            title='Selected Work'>
            <ListItem
              title='Nucleus: Global Intranet'
              summary='Lead design of a global intranet for AstraZeneca spanning over 10 languages and 80 thousand daily users.'
              link='work/nucleus' />
            <ListItem
              title='Remote Education Course'
              summary='Creation of a new way in educating a workforce remotely for Pearson Educaiton.' link='work/remote-education' />
            <ListItem
              title='Global People Search'
              summary='An iOS app for searching colleagues within a AstraZeneca.' link='work/people-search' />
            <ListItem
              title='Metrik Typeface' 
              summary='A geometric display typeface built for unique brands.'
              link='/work/metrik' />
            <ListItem
              title='Customer Satisfaction App'
              summary='Digital transformation of how National Express measure and maintain customer satisfaction.'
              link='work/customer-satisfaction' />
          </Column>
        </Container>
      </div>
    )
  }
}

export default Home
