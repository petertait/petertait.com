import React, { Component, PropTypes } from 'react'
import Radium from 'radium'

import { color, type } from '../vars'

@Radium
class ContactForm extends Component {
  render() {
    const domain = window.location.host
    const url = 'http://' + domain + '/thanks'
    return (
      <form action='https://formspree.io/contact@petertait.com'
      method='POST'>
        <input key='1' style={styles.field} type='text' name='name' placeholder='Full Name' />
        <input key='2' style={styles.field} type='email' name='_replyto' placeholder='Email Address'/>
        <textarea key='3' style={styles.field} type='message' name='message' placeholder='Message'/>
        <input style={styles.btn} type='submit' value='Send Message &rarr;'/>
        <input type='hidden' name='_next' value={url} />
      </form>
    )
  }
}

const styles = {
  field: {
    backgroundColor: 'transparent',
    position: 'relative',
    padding: '10px 15px',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: 'inherit',
    marginBottom: '-1px',
    transition: '0.2s',
    color: 'inherit',
    opacity: '0.4',

    ':focus': {
      opacity: '1',
      zIndex: '1',
      transform: 'scale(1.01)',
      backgroundColor: color.white
    }
  },
  btn: {
    backgroundColor: 'transparent',
    color: 'inherit',
    width: 'auto',
    border: '3px solid',
    marginTop: '5px',
    padding: '8px 25px 8px 35px',
    transition: '0.2s',
    cursor: 'pointer',

    ':hover': {
      opacity: '0.7'
    }
  }
}

export default ContactForm
