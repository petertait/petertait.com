import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import Radium from 'radium'
import Isvg from 'react-inlinesvg'

import { breakpoint, color, type } from '../vars'

@Radium
class GridBlock extends Component {
  render() {
    const thumb = {
      backgroundImage: 'url(../images/work/' + this.props.project + '/thumb.png)'
    }
    const url = 'work/' + this.props.project
    return (
      <div style={[styles.block, styles[this.props.width]]}>
        <div style={[styles.inner, styles[this.props.color], thumb]}>
          <Link style={styles.link} to={url}>
            <h2 style={styles.title}>{this.props.title}</h2>
          </Link>
        </div>
      </div>
    )
  }
}

const styles = {
  block: {
    verticalAlign: 'top',
    transition: '0.2s',

    ':hover': {
      transform: 'scale(0.98)',
      boxShadow: 'inset 0 0 0 10px white',
    },

    [breakpoint.medium]: {
      display: 'inline-block',
      marginLeft: '-4px',
    }
  },
  inner: {
    margin: '5px',
  },
  link: {
    display: 'block',
    border: 'none',
    position: 'relative',
    height: '300px'
  },
  title: {
    fontFamily: type.fontMono,
    fontSize: type.mega,
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    padding: '10px',
    textAlign: 'center',
    lineHeight: '1.1'
  },

  full: {
    [breakpoint.medium]: {
      width: '100%'
    }
  },
  half: {
    [breakpoint.medium]: {
      width: '50%'
    }
  },
  third: {
    [breakpoint.medium]: {
      width: '33.33%'
    }
  },
  twoThird: {
    [breakpoint.medium]: {
      width: '66.66%'
    }
  },
  pink: {
    backgroundColor: color.pink
  }
}

export default GridBlock
