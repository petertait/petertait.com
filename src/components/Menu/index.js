import React, { Component } from "react";
import { darken } from "polished";

import Icon from "./logo.svg";

import { Wrapper, Logo, MenuButton, MenuIcon } from "./styles";

class Header extends Component {
  state = {
    isVisible: false
  };

  toggleVisiblity = () => {
    this.setState(state => ({ isVisible: !state.isVisible }));
  };

  render() {
    const { isVisible } = this.state;
    const { color } = this.props;

    return (
      <Wrapper role="navigation" color={color} aria-label="main-navigation">
        <Logo
          cover
          to="/"
          title="Logo"
          color={color}
          duration={0.6}
          bg={color ? darken(0.1, color.dark) : "black"}
        >
          <Icon />
        </Logo>
        <MenuButton color={color} onClick={this.toggleVisiblity}>
          <MenuIcon isVisible={isVisible} color={color}>
            <span />
          </MenuIcon>
        </MenuButton>
      </Wrapper>
    );
  }
}

export default Header;
