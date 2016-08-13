import React, { Component, PropTypes } from 'react'
import Radium from 'radium'
import LazyLoad from 'react-lazy-load'

import { breakpoint } from '../vars'

@Radium
class ProjectDetails extends Component {
  render() {
    return (
      <LazyLoad offset={400}>
        <img src={this.props.url} alt={this.props.alt} />
      </LazyLoad>
    )
  }
}

const styles = {
  image: {

  }
}

export default ProjectDetails
