import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import App from './containers/App'
import Home from './containers/Home'
import About from './containers/About'

render((
  <Router history={browserHistory}>
    <Route path={'/'} component={App}>
      <IndexRoute component={Home} />
      <Route path='about' component={About} />
    </Route>
    <Route path='*' component={Home} />
  </Router>
), document.getElementById('app'));
