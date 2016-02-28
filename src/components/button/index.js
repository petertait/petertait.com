import React, {Component, PropTypes} from 'react';
import CSSModules from 'react-css-modules';

import styles from "./styles.css";

class Button extends Component {
  render() {
    return (
      <button {...this.props} onClick={this.props.onClick} styleName='button'></button>
    );
  }
}

Button.propTypes = {
  onClick: PropTypes.func
};

Button.defaultProps = {
  
}

export default CSSModules(Button, styles);
