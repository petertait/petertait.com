import React, {Component, PropTypes} from 'react';
import { browserHistory } from "react-router";
import CSSModules from 'react-css-modules';

import Button from '../../components/button';

import styles from "./styles.css";

class About extends Component {

  home() {
    browserHistory.push("/");
  }

  render() {
    return (
      <div className='container'>
        <div styleName='content'>
          <h1 styleName='header'>About</h1>
          <p styleName='description'>React starter using ES6 – includes hot reloading for React and PostCSS</p>
        </div>
        <div styleName='content'>
          <Button styleName='button' onClick={this.home}>Return home</Button>
        </div>
      </div>
    );
  }
}

export default (CSSModules(About, styles));
