import React, { Component, PropTypes } from 'react'

import { color } from '../vars'

import Hero from '../components/Hero'
import Container from '../components/Container'
import Column from '../components/Column'
import ContactForm from '../components/ContactForm'
import SocialButtons from '../components/SocialButtons'

class Contact extends Component {
  componentWillMount() {
    this.state = {
      theme: {
        primary: color.white,
        secondary: color.black
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
              <h3>Get in touch, whether it's a work enquiry or just to say hello.</h3>
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
