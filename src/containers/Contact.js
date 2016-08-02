import React, { Component, PropTypes } from 'react'

import { color } from '../vars'

import ContactForm from '../components/ContactForm'

class Contact extends Component {
  componentWillMount() {
    this.state = {
      theme: {
        primary: color.black,
        secondary: color.sky
      }
    }
    document.body.style.backgroundColor = this.state.theme.primary;
    document.body.style.color = this.state.theme.secondary;
  }

  render() {
    return (
      <ContactForm />
    )
  }
}

export default Contact
