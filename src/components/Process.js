import React, { Component, PropTypes } from 'react'
import Radium from 'radium'

import { breakpoint, type } from '../vars'

@Radium
class Process extends Component {
  render() {
    var showLine
    if (this.props.nthChild != 'lastChild') {
      showLine = (
        <span style={styles.line} />
      )
    }
    const processItems = this.props.items.map(function(item) {
      return (
        <li key={item.name} style={styles.item}>{item.name}</li>
      )
    })

    return (
      <div style={styles.container}>
        <span style={styles.circle} />
        {showLine}
        <h3 style={styles.title}>{this.props.title}</h3>
        {processItems}
      </div>
    )
  }
}

const styles = {
  container: {
    position: 'relative',
    width: 'calc(100% - 10px)',
    margin: '10px 0',
    padding: '0 10px',

    [breakpoint.small]: {
      width: 'calc(50% - 10px)',
    },
    [breakpoint.medium]: {
      width: 'calc(25% - 10px)',
    }
  },
  title: {
    marginTop: '20px',
    marginBottom: '10px'
  },
  item: {
    opacity: '0.8',
    display: 'block',
    marginBottom: '10px',
    fontSize: type.epsilon,
    lineHeight: '1.3'
  },
  circle: {
    width: '20px',
    height: '20px',
    borderStyle: 'solid',
    borderWidth: '2px',
    display: 'block',
    transform: 'rotate(45deg)',
    marginLeft: '-10px',
    backgroundColor: 'currentColor'
  },
  line: {
    borderTopWidth: '2px',
    borderTopStyle: 'solid',
    width: 'calc(100% + 10px)',
    display: 'block',
    position: 'absolute',
    top: '9px',
    left: '23px',
    opacity: '0.3'
  }
}

export default Process
