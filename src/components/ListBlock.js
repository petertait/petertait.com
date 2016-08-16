import React, { Component, PropTypes } from 'react'
import Radium from 'radium'

import { breakpoint, type } from '../vars'

@Radium
class ListBlock extends Component {
  render() {
    const borderColor = this.props.color
    const listItems = this.props.items.map(function(item) {
      return (
        <li key={item.name} style={[styles.listItem, styles[borderColor]]}>{item.name}</li>
      )
    })
    return (
      <div style={[styles.container, styles[this.props.color]]}>
        <h3 style={styles.title}>{this.props.title}</h3>
        {this.props.intro && <p style={styles.intro}>{this.props.intro}</p>}
        <ul>{listItems}</ul>
      </div>
    )
  }
}

const styles = {
  container: {
    borderWidth: '2px',
    borderStyle: 'solid',
    borderColor: 'rgba(255,255,255, 0.2)',
    padding: '30px 20px 20px',
    margin: '40px 0 20px'
  },
  title: {
    margin: '0 10px 20px'
  },
  intro: {
    fontSize: type.delta,
    padding: '0 10px 10px',
    opacity: '0.8',

    [breakpoint.medium]: {
      fontSize: type.epsilon,
      lineHeight: '1.7',
      padding: '0 10px',
    }
  },
  listItem: {
    fontSize: type.delta,
    borderBottomWidth: '1px',
    borderBottomStyle: 'solid',
    borderBottomColor: 'rgba(255,255,255, 0.25)',
    paddingBottom: '5px',
    opacity: '0.8',
    margin: '10px',

    [breakpoint.medium]: {
      fontSize: type.epsilon,
      display: 'inline-block',
      width: 'calc(50% - 20px)'
    }
  },
  black: {
    borderColor: 'rgba(0,0,0, 0.2)'
  }
}

export default ListBlock
