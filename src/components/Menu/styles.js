import styled from "styled-components";
import { Link } from "gatsby";
import styledMap from "styled-map";
import { transparentize } from "polished";

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
  transition: ${theme.transition};

  &::before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    opacity: 0;
    transform: translateX(-105%);
    transition: ${theme.transition};

    background-color: ${styledMap("shade", {
      dark: props => (props.color ? props.color.light : "white"),
      default: props => (props.color ? props.color.dark : "black")
    })};
  }

  svg {
    height: 35px;
    width: auto;

    path {
      transition: ${theme.transition};

      fill: ${styledMap("shade", {
        dark: props => (props.color ? props.color.light : "white"),
        default: props => (props.color ? props.color.dark : "black")
      })};
    }
  }

  &:hover {
    transition: ${theme.transition} 0.15s;

    box-shadow: 0 5px 70px
      ${styledMap("shade", {
        dark: props => transparentize(0.8, "black"),
        default: props => transparentize(0.1, "black")
      })};

    &::before {
      opacity: 1;
      transform: none;
    }

    svg path {
      fill: ${styledMap("shade", {
        dark: props => (props.color ? props.color.dark : "black"),
        default: props => (props.color ? props.color.light : "white")
      })};
    }
  }
`;

export const NavButton = styled(Link)`
  padding-bottom: 4px;
  margin: 0 15px;
  height: 100%;
  display: flex;
  align-items: center;
  position: relative;
  opacity: 0.5;
  font-size: ${theme.font.size.epsilon};

  &::before {
    content: "";
    width: 100%;
    height: 2px;
    position: absolute;
    bottom: 0;
    left: 0;
    transform: scale(0);
    opacity: 0;
    transition: ${theme.transition};
  }

  &:hover,
  &.active {
    opacity: 1;

    &::before {
      transform: none;
      opacity: 0.2;
    }
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;

  ${NavButton} {
    color: ${styledMap("shade", {
      dark: props => (props.color ? props.color.light : "white"),
      default: props => (props.color ? props.color.dark : "black")
    })};

    &::before {
      background-color: ${styledMap("shade", {
        dark: props => (props.color ? props.color.light : "white"),
        default: props => (props.color ? props.color.dark : "black")
      })};
    }
  }
`;
