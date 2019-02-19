import React, { Component } from "react";

import Icon from "./logo.svg";

import { Wrapper, Logo, Nav, NavButton } from "./styles";

class Header extends Component {
  state = {
    isVisible: false
  };

  toggleVisiblity = () => {
    this.setState(state => ({ isVisible: !state.isVisible }));
  };

  render() {
    console.log(shade);
    // const { isVisible } = this.state;
    const { color, shade } = this.props;

    return (
      <Wrapper role="navigation" aria-label="main-navigation">
        <Logo to="/" title="Logo" color={color} shade={shade}>
          <Icon />
        </Logo>
        <Nav color={color} shade={shade}>
          <NavButton to="/about" activeClassName="active">
            About
          </NavButton>
          <NavButton to="/work" activeClassName="active">
            Work
          </NavButton>
          <NavButton to="/contact" activeClassName="active">
            Contact
          </NavButton>
        </Nav>
      </Wrapper>
    );
  }
}

export default Header;
