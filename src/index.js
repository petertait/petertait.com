import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import App from './App'
import Home from './pages/Home'
import About from './pages/About'
import CV from './pages/CV'
import Work from './pages/Work'
import Contact from './pages/Contact'
import Thanks from './pages/Thanks'

render((
  <Router history={browserHistory}>
    <Route path={'/'} component={App}>
      <IndexRoute component={Home} />
      <Route path='about' component={About} />
      <Route path='cv' component={CV} />
      <Route path='contact' component={Contact} />
      <Route path='work' component={Work} />
      <Route path='thanks' component={Thanks} />
      <Route path='*' component={Home} />
    </Route>
  </Router>
), document.getElementById('app'));
