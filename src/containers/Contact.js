import React, { Component, PropTypes } from 'react'

import { color } from '../vars'

import Hero from '../components/Hero'
import ContactForm from '../components/ContactForm'

class Contact extends Component {
  componentWillMount() {
    this.state = {
      theme: {
        primary: color.sky,
        secondary: color.blue
      }
    }
    document.body.style.backgroundColor = this.state.theme.primary;
    document.body.style.color = this.state.theme.secondary;
  }

  render() {
    return (
      <div>
        <Hero headline='Talk to me.' />
        <ContactForm />
      </div>
    )
  }
}

export default Contact
