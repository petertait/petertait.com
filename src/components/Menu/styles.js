import styled from "styled-components";
import { Link } from "gatsby";

import theme from "config/theme";

export const Wrapper = styled.header`
  top: 0;
  left: 0;
  z-index: 10;
  position: fixed;
  display: flex;
  align-items: center;
`;

export const Logo = styled(Link)`
  display: flex;
  padding: 15px;
  margin-right: 5px;

  svg {
    height: 35px;
    width: auto;

    path {
      transition: ${theme.transition};
      fill: white;
    }
  }

  &:hover {
    background-color: white;

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
