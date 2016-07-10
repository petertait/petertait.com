import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'

import App from './containers/App'

import './global.css'

render((
  <Router history={browserHistory}>
    <Route component={App} path="/" />
  </Router>
), document.getElementById('app'))
