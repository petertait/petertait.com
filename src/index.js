import React from "react";
import { render } from "react-dom";
import {
  Router,
  Route,
  IndexRoute,
  browserHistory,
  applyRouterMiddleware,
} from "react-router";
import { useScroll } from "react-router-scroll";

import App from "./App";
import Home from "./pages/Home";
import About from "./pages/About";
import CV from "./pages/CV";
import Contact from "./pages/Contact";
import Thanks from "./pages/Thanks";
import Work from "./pages/Work";

import Nucleus from "./pages/projects/Nucleus";
import Education from "./pages/projects/Education";
import People from "./pages/projects/People";
import Express from "./pages/projects/Express";
import Metrik from "./pages/projects/Metrik";
import Pebble from "./pages/projects/Pebble";

render(
  <Router history={browserHistory} render={applyRouterMiddleware(useScroll())}>
    <Route path={"/"} component={App}>
      <IndexRoute component={Home} />
      <Route path="/about" component={About} />
      <Route path="/about/cv" component={CV} />
      <Route path="/contact" component={Contact} />
      <Route path="/work" component={Work} />
      <Route path="/work/nucleus" component={Nucleus} />
      <Route path="/work/remote-education" component={Education} />
      <Route path="/work/people-search" component={People} />
      <Route path="/work/metrik" component={Metrik} />
      <Route path="/work/customer-satisfaction" component={Express} />
      <Route path="/work/pebble" component={Pebble} />
      <Route path="/thanks" component={Thanks} />
      <Route path="*" component={Home} />
    </Route>
  </Router>,
  document.getElementById("app")
);
