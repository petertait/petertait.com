import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import CSSModules from 'react-css-modules';
import BodyStyle from 'body-style';

import Header from '../../components/Header';
import Logo from '../../components/Logo';
import Hero from '../../components/Hero';
import ButtonLink from '../../components/ButtonLink';

import styles from './styles.css';

class Home extends Component {
  render() {
    return (
      <section>
        <BodyStyle style={{ backgroundColor: '#0f0f0f' }} className='home' />
        <Header styleName="header"/>
        <div className='container' styleName='content'>
          <h1 styleName='headline'>User interface and experience designer.</h1>
          <ButtonLink to='/' styleName='button'>Curriculum Vitae</ButtonLink>
        </div>
      </section>
    );
  }
}

export default (CSSModules(Home, styles));
