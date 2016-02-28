import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './containers/app/index';
import Home from './pages/home/index';
import About from './pages/about/index';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="about" component={About} />
  </Route>
);
