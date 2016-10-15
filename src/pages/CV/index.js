import React, { Component, PropTypes } from 'react'
import Radium from 'radium'

import { color, type } from '../../vars'

import Hero from '../../components/Hero'
import Container from '../../components/Container'
import Column from '../../components/Column'
import Anchor from '../../components/Anchor'

import IntroContent from './intro.md'
import PebbleContent from './pebble.md'
import FreelanceContent from './freelance.md'
import EinkContent from './eink.md'
import SkillsContent from './skills.md'
import PassionsContent from './passions.md'

@Radium
class CV extends Component {
  componentWillMount() {
    this.state = {
      theme: {
        primary: color.sky,
        secondary: color.blue
      }
    }
    document.body.style.backgroundColor = this.state.theme.primary
    document.body.style.color = this.state.theme.secondary
  }

  render() {
    return (
      <div>
        <Hero headline='Curriculum Vitae' />
        <Container>
          <Column width='half' headline='An agile designer with a focus on an interactive and refined process.'>
            <Anchor url='../media/docs/peter-tait-cv.pdf' text='Download the PDF' margin='topBottom' />
          </Column>
          <Column width='half'>
            <div style={styles.content} dangerouslySetInnerHTML={{ __html: IntroContent }} />
          </Column>
        </Container>
        <hr />
        <Container>
          <Column width='full' headline='Work' />
        </Container>
        <Container>
          <Column width='half'>
            <h3 style={styles.h3}>Peter Tait Ltd.</h3>
            <h4 style={styles.h4}>Sept 2010–Present</h4>
          </Column>
          <Column width='half'>
            <h3 style={styles.h3}>Designer and frontend developer</h3>
            <div style={styles.content} dangerouslySetInnerHTML={{ __html: FreelanceContent }} />
          </Column>
        </Container>
        <Container>
          <Column width='half'>
            <h3 style={styles.h3}>{'pebble {code}'}</h3>
            <h4 style={styles.h4}>July 2014–Sept 2016</h4>
          </Column>
          <Column width='half'>
            <h3 style={styles.h3}>Senior UI/UX Designer</h3>
            <div style={styles.content} dangerouslySetInnerHTML={{ __html: PebbleContent }} />
          </Column>
        </Container>
        <Container>
          <Column width='half'>
            <h3 style={styles.h3}>Electronic Ink</h3>
            <h4 style={styles.h4}>April 2012–July 2012 <br/> March 2011–Sept 2011</h4>
          </Column>
          <Column width='half'>
            <h3 style={styles.h3}>Visual Designer</h3>
            <div style={styles.content} dangerouslySetInnerHTML={{ __html: EinkContent }} />
          </Column>
        </Container>
        <hr />
        <Container>
          <Column width='full' headline='Education' />
        </Container>
        <Container>
          <Column width='third'>
            <div style={styles.education}>
              <h3 style={styles.h3}>University of Southampton</h3>
              <h4 style={styles.h4}>BA (Hons) Graphic Design <br/> 2011–2014</h4>
              <h5 style={styles.h5}>First-class honours</h5>
            </div>
          </Column>
          <Column width='third'>
            <div style={styles.education}>
              <h3 style={styles.h3}>Beechen Cliff School, Bath</h3>
              <h4 style={styles.h4}>A-Level <br/> 2008–2010</h4>
              <h5 style={styles.h5}>A* – Fine Art <br/> A&nbsp; – Graphic Design <br/> A&nbsp; – History</h5>
              <h5 style={[styles.h5, styles.award]}>BMT Group: Award for Excellence in Science and Technology</h5>
            </div>
          </Column>
          <Column width='third'>
            <div style={styles.education}>
              <h3 style={styles.h3}>Beechen Cliff School, Bath</h3>
              <h4 style={styles.h4}>GCSE <br/> 2006–2008</h4>
              <h5 style={styles.h5}>12 A* to C grades</h5>
            </div>
          </Column>
        </Container>
        <hr />
        <Container>
          <Column width='full' headline='Personal' />
        </Container>
        <Container>
          <Column width='half'>
            <h3 style={styles.h3}>Skills</h3>
            <div style={styles.content} dangerouslySetInnerHTML={{ __html: SkillsContent }} />
          </Column>
          <Column width='half'>
            <h3 style={styles.h3}>Passions</h3>
            <div style={styles.content} dangerouslySetInnerHTML={{ __html: PassionsContent }} />
          </Column>
        </Container>
      </div>
    )
  }
}

const styles = {
  h3: {
    fontSize: type.gamma,
    fontFamily: type.fontSans,
    marginBottom: '5px'
  },
  h4: {
    fontSize: type.delta,
    fontWeight: type.fontRegular,
    opacity: '0.5',
    marginBottom: '20px'
  },
  h5: {
    marginTop: '-15px',
    fontWeight: type.fontRegular
  },
  content: {
    fontSize: type.delta
  },
  education: {
    marginBottom: '30px'
  },
  award: {
    marginTop: '5px'
  }
}

export default CV
