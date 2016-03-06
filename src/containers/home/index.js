import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import CSSModules from 'react-css-modules';
import BodyStyle from 'body-style';

import Header from '../../components/Header';
import Hero from '../../components/Hero';
import ButtonLink from '../../components/ButtonLink';

import styles from './styles.css';

class Home extends Component {
  render() {
    return (
      <section>
        <BodyStyle style={{ backgroundColor: '#000' }} />
        <Header/>
        <Hero/>
        <div className='container' styleName='content'>
          <h1 styleName='header'>Hello world</h1>
          <p styleName='description'>Welcome to React Starter.</p>
          <ButtonLink to='/blog' styleName='button'>Go to blog</ButtonLink>
        </div>
      </section>
    );
  }
}

export default (CSSModules(Home, styles));
