import React, {Component, PropTypes} from 'react';
import { browserHistory } from "react-router";
import CSSModules from 'react-css-modules';

import Button from '../../components/button';

import styles from "./styles.css";

class Home extends Component {

  about() {
    browserHistory.push("/about");
  }

  render() {
    return (
      <div className='container'>
        <div styleName='content'>
          <h1 styleName='header'>Hello world</h1>
          <p styleName='description'>Welcome to React Starter.</p>
        </div>
        <div styleName='content'>
          <Button onClick={this.about}>Learn more</Button>
        </div>
      </div>
    );
  }
}

export default (CSSModules(Home, styles));
