import React, { useState } from "react";
import { darken } from "polished";

import Icon from "./logo.svg";

import { Wrapper, Logo, MenuButton, MenuIcon } from "./styles";

const Header = ({ color }) => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisiblity = () => setIsVisible(!isVisible);

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
      <MenuButton color={color} onClick={toggleVisiblity}>
        <MenuIcon isVisible={isVisible} color={color}>
          <span />
        </MenuIcon>
      </MenuButton>
    </Wrapper>
  );
};

export default Header;
