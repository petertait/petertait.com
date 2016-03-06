import React, { Component, PropTypes } from 'react';
import CSSModules from 'react-css-modules';

import styles from './styles.css';

class Hero extends Component {
  render() {
    return (
      <section {...this.props} styleName='hero'>
        <div className='container'>

        </div>
      </section>
    );
  }
}

export default CSSModules(Hero, styles);
