import styled from "styled-components";
import { transparentize } from "polished";
import { Link } from "gatsby";

import theme from "config/theme";

export const Wrapper = styled.header`
  top: 0;
  left: 0;
  z-index: 10;
  position: fixed;
  display: flex;
  align-items: center;
  mix-blend-mode: difference;
`;

export const Logo = styled(Link)`
  display: flex;
  padding: 15px;
  margin-right: 5px;
  background-color: white;

  svg {
    height: 35px;
    width: auto;

    path {
      transition: ${theme.transition};
      fill: black;
    }
  }

  &:hover {
    background-color: ${transparentize(0.2, "white")};

    svg path {
      fill: black;
    }
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
`;

export const NavButton = styled(Link)`
  color: white;
  padding-bottom: 4px;
  margin: 0 20px;
  height: 100%;
  display: flex;
  align-items: center;
  position: relative;
  opacity: 0.5;
  font-size: ${theme.font.size.epsilon};

  &:hover,
  &.active {
    opacity: 1;
  }

  @media (max-width: ${theme.size.mobile}) {
  }
`;
