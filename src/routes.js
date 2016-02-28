import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './containers/app/index';
import Home from './containers/home/index';
import About from './containers/about/index';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="about" component={About} />
  </Route>
);
