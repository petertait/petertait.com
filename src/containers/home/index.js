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
        <BodyStyle style={{ backgroundColor: '#ffab10' }} className='home' />
        <Header/>
        <div className='container' styleName='content'>
          <h1 styleName='headline'>Peter is a user interface and experience designer at pebble code.</h1>
          <p styleName='description'>Currently based in London, Peter's aim is to design and build solutions to complex business problems.</p>
          <p styleName='description'>Peter has experience working with a range of clients from global corporations to family firms including: Intel, AstraZeneca, Pearson, HSBC, National Grid, Lloyds Banking Group, IUCN, National Express, EDF, The World Bank, NG Bailey and APM Technologies.</p>
        </div>
      </section>
    );
  }
}

export default (CSSModules(Home, styles));
