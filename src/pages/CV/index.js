import React, { Component, PropTypes } from 'react'
import Radium from 'radium'

import { color, type } from '../../vars'

import Hero from '../../components/Hero'
import Container from '../../components/Container'
import Column from '../../components/Column'
import ColumnContent from '../../components/ColumnContent'

import Intro from './intro.md'
import Pebble from './pebble.md'
import Freelance from './freelance.md'
import Eink from './eink.md'

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
          <Column width='half' headline='An agile designer with a focus on an interactive and refined process.' />
          <Column width='half'>
            <div style={styles.content} dangerouslySetInnerHTML={{ __html: Intro }} />
          </Column>
        </Container>

        <hr style={styles.hr}/>

        <Container>
          <Column width='full' headline='Work' />
        </Container>

        <Container>
          <Column width='half'>
            <h3 style={styles.h3}>{'pebble {code}'}</h3>
            <h4 style={styles.h4}>July 2014–present</h4>
          </Column>
          <Column width='half'>
            <h3 style={styles.h3}>Senior UI/UX Designer</h3>
            <div style={styles.content} dangerouslySetInnerHTML={{ __html: Pebble }} />
          </Column>
        </Container>
        <Container>
          <Column width='half'>
            <h3 style={styles.h3}>Freelance</h3>
            <h4 style={styles.h4}>2010–2014</h4>
          </Column>
          <Column width='half'>
            <h3 style={styles.h3}>Designer and frontend developer</h3>
            <div style={styles.content} dangerouslySetInnerHTML={{ __html: Freelance }} />
          </Column>
        </Container>
        <Container>
          <Column width='half'>
            <h3 style={styles.h3}>Electronic Ink</h3>
            <h4 style={styles.h4}>April 2012–July 2012 <br/> March 2011–Sept 2011</h4>
          </Column>
          <Column width='half'>
            <h3 style={styles.h3}>Visual Designer</h3>
            <div style={styles.content} dangerouslySetInnerHTML={{ __html: Eink }} />
          </Column>
        </Container>

        <hr style={styles.hr}/>

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
      </div>
    )
  }
}

const styles = {
  h3: {
    marginBottom: '5px',
    fontSize: type.gamma,
    fontFamily: type.fontSans
  },
  h4: {
    color: color.blue,
    fontSize: type.delta,
    fontWeight: type.fontRegular,
    opacity: '0.5',
    marginBottom: '20px'
  },
  h5: {
    marginTop: '-15px'
  },
  content: {
    fontSize: type.delta
  },
  education: {
    paddingBottom: '30px'
  }
}

export default CV
