import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import App from './containers/App'
import Home from './containers/Home'
import About from './containers/About'
import Contact from './containers/Contact'
import Thanks from './containers/Thanks'

render((
  <Router history={browserHistory}>
    <Route path={'/'} component={App}>
      <IndexRoute component={Home} />
      <Route path='about' component={About} />
      <Route path='contact' component={Contact} />
      <Route path='thanks' component={Thanks} />
      <Route path='*' component={Home} />
    </Route>
  </Router>
), document.getElementById('app'));
