import React, { Component, PropTypes } from 'react'

import { color } from '../../vars'

import Hero from '../../components/Hero'
import Container from '../../components/Container'
import Column from '../../components/Column'
import ContactForm from '../../components/ContactForm'
import SocialButtons from '../../components/SocialButtons'

class Contact extends Component {
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
        <Hero headline='Talk to me.' />
          <Container>
            <Column>
              <h3>{"Get in touch and say hello. Whether you have a work enquiry or simply want to find out more, let's talk."}</h3>
              <SocialButtons />
            </Column>
            <Column>
              <ContactForm />
            </Column>
          </Container>
      </div>
    )
  }
}

export default Contact
