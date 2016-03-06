import React, { Component, PropTypes } from "react";
import { Link } from "react-router";
import CSSModules from "react-css-modules";

import styles from "./styles.css";

class ButtonLink extends Component {
  render() {
    return (
      <Link {...this.props} styleName="button-link"></Link>
    );
  }
}

export default CSSModules(ButtonLink, styles);
