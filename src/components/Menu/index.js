import React from "react";

import Icon from "./logo.svg";

import { Wrapper, Logo, Nav, NavButton } from "./styles";

class Header extends React.Component {
  state = {
    isVisible: false
  };

  toggleVisiblity = () => {
    this.setState(state => ({ isVisible: !state.isVisible }));
  };

  render() {
    // const { isVisible } = this.state;

    return (
      <Wrapper role="navigation" aria-label="main-navigation">
        <Logo to="/" title="Logo">
          <Icon />
        </Logo>
        <Nav>
          <NavButton to="/" activeClassName="active">
            About
          </NavButton>
          <NavButton to="/" activeClassName="active">
            Work
          </NavButton>
          <NavButton to="/" activeClassName="active">
            Contact
          </NavButton>
        </Nav>
      </Wrapper>
    );
  }
}

export default Header;
