import React from "react";
import { Route, IndexRoute } from "react-router";

import Home from "./containers/Home/index";
import Blog from "./containers/Blog/index";

export default (
  <Route path="/">
    <IndexRoute component={Home} />
    <Route path="Blog" component={Blog} />
  </Route>
);
