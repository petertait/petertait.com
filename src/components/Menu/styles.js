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
  padding: 18px;
  margin-right: 5px;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    opacity: 0;
    background-color: white;
    transform: translateX(-105%);
    transition: ${theme.transition};
  }

  svg {
    height: 35px;
    width: auto;

    path {
      fill: white;
      transition: ${theme.transition};
    }
  }

  &:hover {
    &::before {
      opacity: 1;
      transform: none;
    }

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
  font-size: ${theme.font.size.delta};

  &:hover,
  &.active {
    opacity: 1;
  }

  @media (max-width: ${theme.size.mobile}) {
  }
`;
