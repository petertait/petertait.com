import React, { Component, PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import Isvg from 'react-inlinesvg'

import styles from './styles.css';

class Logo extends Component {
  render() {
    return (
      <Isvg src='../images/logo.svg' styleName="logo" />
    );
  }
}

export default CSSModules(Logo, styles);
