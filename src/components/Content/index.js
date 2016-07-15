import React, { Component, PropTypes } from 'react';
import Radium from 'radium';
import { Link } from 'react-router';
import ReactMarkdown from 'react-markdown';

class Content extends Component {
  render() {
    return (
      <div className='container' style={styles.container}>
        <div style={styles.left}>
          <h3>{this.props.title}</h3>
        </div>
        <div style={styles.right}>
          <ReactMarkdown source={this.props.source} />
        </div>
      </div>
    )
  }
}

var styles = {
  container: {
    justifyContent: 'space-between',
    paddingBottom: '50px',

    '@media screen and (min-width: 800px)': {
      display: 'flex'
    }
  },
  left: {
    '@media screen and (min-width: 800px)': {
      width: '50%',
      marginRight: '20px',
    }
  },
  right: {
    '@media screen and (min-width: 800px)': {
      marginRight: '20px',
      width: '50%'
    }
  }
}

module.exports = Radium(Content);
