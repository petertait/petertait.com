import "babel-polyfill";

import React from "react";
import ReactDOM from "react-dom";
import { Router, browserHistory } from "react-router";

import Routes from './routes';

import "./global.css";

const DOM_APP_EL_ID = "app";

ReactDOM.render((
  <Router history={browserHistory}>
    {Routes}
  </Router>
), document.getElementById(DOM_APP_EL_ID));
