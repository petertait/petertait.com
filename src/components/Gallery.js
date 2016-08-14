import React, { Component, PropTypes } from 'react'
import Radium from 'radium'
import Fluffy from 'fluffy.js'

import { breakpoint } from '../vars'

@Radium
class Gallery extends Component {
  componentDidMount() {
    Fluffy.create('[data-fluffy-container]')
  }
  render() {
    const images = this.props.images.map(function(image) {
      return (
        <img key={image.alt} src={image.url} alt={image.alt} style={styles.image} />
      )
    })
    return (
      <div data-fluffy-container style={styles.container}>
        <div data-fluffy-content>
          {images}
        </div>
      </div>
    )
  }
}

const styles = {
  image: {

    [breakpoint.medium]: {

    }
  }
}

export default Gallery
