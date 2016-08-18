import React, { Component, PropTypes } from 'react'

import { color } from '../../vars'

import Hero from '../../components/Hero'
import Container from '../../components/Container'
import Column from '../../components/Column'

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
    const primary = this.state.theme.primary
    const secondary = this.state.theme.secondary
    return (
      <div>
        <Hero headline='Thanks for getting in touch!' />
        <Container>
          <Column title="I'll be sure to reply as soon as possible." />
        </Container>
      </div>
    )
  }
}

export default Thanks
