import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'

import Home from './containers/Home'

import './global.css'

render((
  <Router history={browserHistory}>
    <Route component={Home} path="/" />
  </Router>
), document.getElementById('app'))
