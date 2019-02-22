import React, { Component } from "react";

import { Wrapper } from "./styles";

class Scroller extends Component {
  componentDidMount() {
    if (typeof window !== "undefined") {
      window.addEventListener("wheel", this.replaceVerticalScrollByHorizontal);
    }
  }

  componentWillUnmount() {
    if (typeof window !== "undefined") {
      window.removeEventListener(
        "wheel",
        this.replaceVerticalScrollByHorizontal
      );
    }
  }

  replaceVerticalScrollByHorizontal = event => {
    if (event.deltaY !== 0) {
      window.scroll(window.scrollX + event.deltaY * 5, window.scrollY);
      event.preventDefault();
    }

    return;
  };

  render() {
    return <Wrapper color={this.props.color}>{this.props.children}</Wrapper>;
  }
}

export default Scroller;
