import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import CSSModules from 'react-css-modules';

import Header from '../../components/Header';
import ButtonLink from '../../components/ButtonLink';

import styles from './styles.css';

class Blog extends Component {
  render() {
    return (
      <section>
        <Header/>
        <div className='container' styleName='content'>
          <h1 styleName='header'>About</h1>
          <p styleName='description'>React starter using ES6 – includes hot reloading for React and PostCSS</p>
          <ButtonLink to='/'>Return home</ButtonLink>
        </div>
      </section>
    );
  }
}

export default (CSSModules(Blog, styles));
