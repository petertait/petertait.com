import React, { Component, PropTypes } from 'react'
import Radium from 'radium'

import { breakpoint, type } from '../vars'

@Radium
class ListBlock extends Component {
  render() {
    const listItems = this.props.items.map(function(item) {
      return (
        <li key={item.name} style={styles.listItem}>{item.name}</li>
      )
    })
    return (
      <div style={styles.container}>
        <h3 style={styles.title}>{this.props.title}</h3>
        {this.props.intro && <p style={styles.intro}>{this.props.intro}</p>}
        <ul>{listItems}</ul>
      </div>
    )
  }
}

const styles = {
  container: {
    border: '2px solid rgba(255,255,255, 0.15)',
    padding: '30px 20px 20px',
    margin: '40px 0 20px'
  },
  title: {
    margin: '0 10px 20px'
  },
  intro: {
    fontSize: type.delta,
    padding: '0 10px 10px',
    lineHeight: '1.7',
    opacity: '0.8',

    [breakpoint.medium]: {
      fontSize: type.epsilon,
      padding: '0 10px',
    }
  },
  listItem: {
    fontSize: type.delta,
    borderBottom: '1px solid rgba(255,255,255, 0.25)',
    paddingBottom: '5px',
    opacity: '0.8',
    margin: '10px',

    [breakpoint.medium]: {
      fontSize: type.epsilon,
      display: 'inline-block',
      width: 'calc(50% - 20px)'
    }
  }
}

export default ListBlock
