import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import Radium from 'radium'
import Isvg from 'react-inlinesvg'

import { breakpoint, color, type } from '../vars'

@Radium
class GridBlock extends Component {
  render() {
    const url = 'work/' + this.props.url
    const backgroundImage = {
      backgroundImage: 'url(../images/work/' + this.props.path + '/thumb.png)'
    }
    return (
      <div key='1' style={[styles.block, styles[this.props.nthChild]]}>
        <div key='2' style={[styles.inner, backgroundImage]}>
          <h2 style={styles.title}>{this.props.title}</h2>
          <span style={styles.client}>{this.props.client}</span>
          <Link style={styles.link} to={url}></Link>
        </div>
      </div>
    )
  }
}

const styles = {
  block: {
    padding: '1px',
    position: 'relative',
    verticalAlign: 'top',
    transition: '0.2s transform',

    ':hover': {
      transform: 'scale(1.04)',
      zIndex: '1'
    },

    [breakpoint.medium]: {
      width: '33.33%',
      display: 'inline-block'
    }
  },
  lastChild: {
    marginBottom: '50px'
  },
  inner: {
    backgroundColor: color.blue,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: color.white,
    overflow: 'hidden',
    transition: '0.2s'
  },
  link: {
    display: 'block',
    border: 'none',
    position: 'relative',
    height: '320px',
    zIndex: '1',
  },
  title: {
    width: '100%',
    textAlign: 'center',
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    fontSize: type.mega,
    lineHeight: '1',
    padding: '20px',
    textShadow: '0 0 40px rgba(0,0,0, 0.5)'
  },
  client: {
    width: '100%',
    textAlign: 'center',
    position: 'absolute',
    bottom: '20px',
    opacity: '0.8'
  }
}

export default GridBlock
