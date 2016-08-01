import React, { Component, PropTypes } from 'react'
import Radium from 'radium'

@Radium
class LinkBlock extends Component {
  render() {
    return (
      <Link to={this.props.link} style={styles.button}>
        <span style={styles.content}>{this.props.content}</span> &rarr;
      </Link>
    )
  }
}

const styles = {
  button: {
    padding: '10px 15px 12px',
    border: '1px solid',
    backgroundColor: 'rgba(255,255,255, 0.2)'
  }
}

export default LinkBlock
