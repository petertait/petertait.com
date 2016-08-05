import React, { Component, PropTypes } from 'react'

import { color } from '../vars'

import Hero from '../components/Hero'
import Container from '../components/Container'
import Column from '../components/Column'

class Thanks extends Component {
  componentWillMount() {
    this.state = {
      theme: {
        primary: color.black,
        secondary: color.white
      }
    }
    document.body.style.backgroundColor = this.state.theme.primary
    document.body.style.color = this.state.theme.secondary
  }

  render() {
    return (
      <div>
        <Hero headline='Thanks for getting in touch!' />
        <Container>
          <Column>
            <h3>I'll be sure to reply as soon as possible.</h3>
          </Column>
        </Container>
      </div>
    )
  }
}

export default Thanks
