import React, { Component, PropTypes } from 'react'
import Radium from 'radium'

import { breakpoint } from '../vars'

import Fluffy from '../vendor/fluffy'

@Radium
class Gallery extends Component {
  render() {
    return (
      <div data-fluffy-container>
        <div data-fluffy-content>
          <img src='http://placehold.it/600x400' />
          <img src='http://placehold.it/600x400' />
          <img src='http://placehold.it/600x400' />
          <img src='http://placehold.it/600x400' />
        </div>
      </div>
    )
  }
}

const styles = {

}

export default Gallery
