import React, { Component, PropTypes } from 'react'
import Radium from 'radium'

import { breakpoint, type } from '../vars'

@Radium
class List extends Component {
  render() {
    const borderColor = this.props.color
    const width = this.props.width
    const listItems = this.props.items.map(function(item) {
      return (
        <li
          key={item.name}
          style={[
            styles.listItem,
            styles[borderColor],
            styles[width]
          ]}>
          {item.name}
        </li>
      )
    })
    return (
      <ul style={styles.list}>{listItems}</ul>
    )
  }
}

const styles = {
  list: {
    width: '100%',
  },
  listItem: {
    fontSize: type.delta,
    borderBottomWidth: '1px',
    borderBottomStyle: 'solid',
    borderBottomColor: 'rgba(255,255,255, 0.25)',
    paddingBottom: '5px',
    opacity: '0.8',
    margin: '10px',
    width: 'calc(100% - 20px)',
    display: 'inline-block',

    [breakpoint.medium]: {
      fontSize: type.epsilon,
      width: 'calc(50% - 20px)'
    }
  },
  full: {
    [breakpoint.medium]: {
      width: 'calc(100% - 20px)'
    }
  },
  black: {
    borderBottomColor: 'rgba(0,0,0, 0.25)',
  }
}

export default List
