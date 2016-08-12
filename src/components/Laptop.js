import React, { Component, PropTypes } from 'react'
import Radium from 'radium'
import Isvg from 'react-inlinesvg'

import { breakpoint } from '../vars'

@Radium
class Laptop extends Component {
  render() {
    const screenshot = '../images/work/' + this.props.url
    return (
      <div style={styles.container}>
        <span style={styles.device}>
          <Isvg src='../images/laptop.svg' />
        </span>
        <span style={styles.screenshot}>
          <img style={styles.image} src={screenshot} alt='' />
        </span>
      </div>
    )
  }
}

const styles = {

}

export default Laptop
