import React, { Component, PropTypes } from 'react'
import Radium from 'radium'

import { color, type } from '../vars'

@Radium
class ContactForm extends Component {
  render() {
    return (
      <div className='container'>
        <form style={styles.form} action='https://formspree.io/contact@petertait.com'
        method='POST'>
          <input style={styles.input} type='text' name='name' placeholder='Full Name' />
          <input style={styles.input} type='email' name='_replyto' placeholder='Email Address'/>
          <textarea style={styles.input} type='message' name='message' placeholder='Message'/>
          <input style={styles.btn} type='submit' value='Send'/>
          <input type="hidden" name="_next" value="http://localhost:8080/" />
        </form>
      </div>
    )
  }
}

const styles = {
  form: {
    maxWidth: '700px',
    marginBottom: '100px'
  },
  input: {
    backgroundColor: 'transparent',
    padding: '10px 15px',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: color.blue,
    color: color.blue,
    marginBottom: '10px',
    fontFamily: type.fontMono,
    fontSize: type.beta,
  },
  btn: {
    border: 'none',
    padding: '10px 15px',
    backgroundColor: color.blue,
    color: color.sky,
    borderBottom: 'none',
    fontFamily: type.fontMono,
    fontSize: type.beta
  }
}

export default ContactForm
