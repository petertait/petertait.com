import React, { Component, PropTypes } from 'react'
import Radium from 'radium'

@Radium
class ContactForm extends Component {
  render() {
    return (
      <form action='https://formspree.io/contact@petertait.com'
      method='POST'>
        <input type='text' name='name'/>
        <input type='email' name='_replyto'/>
        <input type='submit' value='Send'/>
      </form>
    )
  }
}

const styles = {

}

export default ContactForm
