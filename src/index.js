import 'babel-polyfill';
import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';

import Routes from './routes';

import './global.css';

ReactDOM.render((
  <Router history={browserHistory}>
    {Routes}
  </Router>
), document.getElementById('app'));
