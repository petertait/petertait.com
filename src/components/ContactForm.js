import React, { Component, PropTypes } from 'react'
import Radium from 'radium'

import { color, type } from '../vars'

@Radium
class ContactForm extends Component {
  render() {
    return (
      <form style={styles.form} className='container' action='https://formspree.io/contact@petertait.com'
      method='POST'>
        <input style={styles.input} type='text' name='name' placeholder='Full Name' />
        <textarea style={styles.input} type='email' name='_replyto' placeholder='Email Address'/>
        <input style={styles.input} type='submit' value='Send'/>
        <input type="hidden" name="_next" value="http://localhost:8080/" />
      </form>
    )
  }
}

const styles = {
  form: {

  },
  input: {
    width: '100%',
    marginBottom: '50px',
    fontFamily: type.fontMono,
    fontSize: type.beta,
    backgroundColor: 'transparent',
    borderBottom: '1px solid',
    borderBottomColor: color.black,
    outline: 'none'
  },
  'input::placeholder': {
    color: color.sky
  }
}

export default ContactForm
