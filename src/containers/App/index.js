import React, { Component, PropTypes } from 'react';
import Radium, { StyleRoot } from 'radium';

import Styles from '../../styles';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Home from '../../containers/Home';

class App extends Component {
  constructor() {
    super();

    this.state = {
      theme: {}
    }
  }

  render() {
    return (
      <StyleRoot>
        <Styles/>
        <Header/>
        {this.props.children}
        <Footer />
      </StyleRoot>
    )
  }
}

module.exports = Radium(App);
