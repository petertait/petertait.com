import React, { Component, PropTypes } from 'react'

import { color, type } from '../../../vars'

import HeroFeature from '../../../components/HeroFeature'
import Container from '../../../components/Container'
import Column from '../../../components/Column'

import Intro from './intro.md'

class Intranet extends Component {
  componentWillMount() {
    this.state = {
      theme: {
        primary: color.intranet,
        secondary: color.white
      }
    }
    document.body.style.backgroundColor = this.state.theme.primary
    document.body.style.color = this.state.theme.secondary
  }

  render() {
    return (
      <div>
        <HeroFeature headline='Unifying Internal Communication at AstraZeneca' image='intranet' />

        <Container>
          <Column width='third'>

          </Column>
          <Column width='twoThird'>
            <div style={styles.content} dangerouslySetInnerHTML={{ __html: Intro }} />
          </Column>
        </Container>
        <hr />
      </div>
    )
  }
}

const styles = {
  content: {

  }
}

export default Intranet
