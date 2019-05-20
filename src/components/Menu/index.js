import React, { useState, useRef } from "react";
import { darken } from "polished";

import theme from "config/theme";
import { useOnClickOutside } from "config/utils";

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

  const ref = useRef();
  useOnClickOutside(ref, () => setIsVisible(false));

  return (
    <Wrapper
      ref={ref}
      role="navigation"
      colors={colors}
      aria-label="main-navigation"
    >
      <Logo
        cover
        to="/"
        title="Logo"
        colors={colors}
        duration={theme.duration}
        bg={colors ? darken(0.1, colors.dark) : "black"}
      >
        <LogoIcon />
      </Logo>
      <Inner colors={colors} isVisible={isVisible}>
        <Nav isVisible={isVisible}>
          <NavButton
            cover
            to="work"
            duration={theme.duration}
            activeClassName="active"
            bg={colors ? darken(0.1, colors.dark) : "black"}
          >
            Work
          </NavButton>
          <NavButton
            cover
            to="about"
            duration={theme.duration}
            activeClassName="active"
            bg={colors ? darken(0.1, colors.dark) : "black"}
          >
            About
          </NavButton>
          <NavButton
            cover
            to="contact"
            duration={theme.duration}
            activeClassName="active"
            bg={colors ? darken(0.1, colors.dark) : "black"}
          >
            Contact
          </NavButton>
        </Nav>
        <MenuButton colors={colors} onClick={() => toggleVisiblity()}>
          <MenuIcon isVisible={isVisible} colors={colors}>
            <span />
          </MenuIcon>
        </MenuButton>
      </Inner>
    </Wrapper>
  );
};

export default Menu;
