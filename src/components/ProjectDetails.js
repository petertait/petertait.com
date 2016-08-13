import React, { Component, PropTypes } from 'react'
import Radium from 'radium'

import { breakpoint, type } from '../vars'

@Radium
class ProjectDetails extends Component {
  render() {
    var listItems = this.props.items.map(function(item) {
      return (
        <li key={item.name} style={styles.listItem}>{item.name}</li>
      )
    })
    return (
      <div style={styles.container}>
        <h3 style={styles.title}>{this.props.title}</h3>
        <ul>{listItems}</ul>
      </div>
    )
  }
}

const styles = {
  container: {
    border: '2px solid rgba(255,255,255, 0.1)',
    padding: '30px 20px 20px',
    margin: '40px 0 20px'
  },
  title: {
    margin: '0 10px 20px'
  },
  listItem: {
    fontSize: type.epsilon,
    borderBottom: '1px solid rgba(255,255,255, 0.12)',
    paddingBottom: '5px',
    opacity: '0.7',
    margin: '10px',

    [breakpoint.medium]: {
      display: 'inline-block',
      width: 'calc(50% - 20px)'
    }
  }
}

export default ProjectDetails
