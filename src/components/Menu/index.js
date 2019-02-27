import React, { useState } from "react";
import { darken } from "polished";

import LogoIcon from "./logo.svg";
import {
  Wrapper,
  Inner,
  Logo,
  MenuButton,
  MenuIcon,
  Nav,
  NavButton
} from "./styles";

const Menu = ({ colors }) => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisiblity = () => setIsVisible(!isVisible);

  return (
    <Wrapper role="navigation" colors={colors} aria-label="main-navigation">
      <Logo
        cover
        to="/"
        title="Logo"
        colors={colors}
        duration={0.6}
        bg={colors ? darken(0.1, colors.dark) : "black"}
      >
        <LogoIcon />
      </Logo>
      <Inner colors={colors} isVisible={isVisible}>
        <Nav isVisible={isVisible}>
          <NavButton
            cover
            duration={0.6}
            to="work"
            bg={colors ? darken(0.1, colors.dark) : "black"}
          >
            Work
          </NavButton>
          <NavButton
            cover
            duration={0.6}
            to="about"
            bg={colors ? darken(0.1, colors.dark) : "black"}
          >
            About
          </NavButton>
          <NavButton
            cover
            duration={0.6}
            to="contact"
            bg={colors ? darken(0.1, colors.dark) : "black"}
          >
            Contact
          </NavButton>
        </Nav>
        <MenuButton colors={colors} onClick={toggleVisiblity}>
          <MenuIcon isVisible={isVisible} colors={colors}>
            <span />
          </MenuIcon>
        </MenuButton>
      </Inner>
    </Wrapper>
  );
};

export default Menu;
