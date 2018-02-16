import React, { Component, PropTypes } from 'react'
import Radium from 'radium'

import { color } from '../vars'

@Radium
class ContactForm extends Component {
  render() {
    const domain = window.location.host
    const url = 'http://' + domain + '/thanks'
    return (
      <form
        action='https://formspree.io/contact@petertait.com'
        method='POST'>
        <input key='1' style={styles.field} type='text' name='name' placeholder='Full Name' />
        <input key='2' style={styles.field} type='email' name='_replyto' placeholder='Email Address'/>
        <textarea key='3' style={styles.field} type='message' name='message' placeholder='Message'/>
        <input style={[styles.button, styles[this.props.color]]} type='submit' value='Send message &rarr;'/>
        <input type='hidden' name='_next' value={url} />
      </form>
    )
  }
}

const styles = {
  field: {
    backgroundColor: 'transparent',
    position: 'relative',
    padding: '15px',
    border: '1px solid',
    marginBottom: '-1px',
    transition: '0.2s',
    color: 'inherit',
    opacity: '0.4',

    ':focus': {
      opacity: '1',
      backgroundColor: color.white
    }
  },
  button: {
    backgroundColor: 'transparent',
    color: 'inherit',
    width: 'auto',
    borderWidth: '2px',
    borderStyle: 'solid',
    borderColor: 'inherit',
    marginTop: '5px',
    marginBottom: '20px',
    padding: '12px 15px 12px 25px',
    transition: '0.2s',
    cursor: 'pointer'
  },
  blue: {
    ':hover': {
      backgroundColor: color.blue,
      color: color.white,
      borderColor: color.blue
    }
  }
}

export default ContactForm
