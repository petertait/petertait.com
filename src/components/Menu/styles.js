import styled from "styled-components";
import styledMap from "styled-map";
import { lighten, transparentize } from "polished";
import AniLink from "gatsby-plugin-transition-link/AniLink";

import theme from "config/theme";

export const Logo = styled(AniLink)`
  display: flex;
  padding: 18px;
  position: relative;
  overflow: hidden;
  z-index: 2;
  transition: ${theme.transition};
  background-color: ${props =>
    props.color ? lighten(0.06, props.color.dark) : "black"};

  svg {
    height: 35px;
    width: auto;
    position: relative;
    z-index: 3;

    path {
      transition: ${theme.transition};
      fill: ${props => (props.color ? props.color.light : "white")};
    }
  }

  &:hover {
    box-shadow: 0 5px 70px ${transparentize(0.8, "black")};

    svg path {
      fill: ${props => (props.color ? props.color.dark : "black")};
    }
  }
`;

export const MenuIcon = styled.div`
  position: relative;

  span {
    margin-top: 6px;
    opacity: ${props => (props.isVisible ? "0" : "1")};
  }

  &::before,
  &::after,
  span {
    content: "";
    width: 100%;
    height: 2px;
    display: block;
    transform-origin: 2px;
    background-color: white;
    transition: ${theme.transition};

    transform: ${styledMap("isVisible", {
      false: "none",
      true: "rotate(45deg)"
    })};
  }

  &::after {
    margin-top: 6px;

    transform: ${styledMap("isVisible", {
      false: "none",
      true: "rotate(-45deg)"
    })};
  }
`;

export const MenuButton = styled.button`
  border: none;
  position: relative;
  cursor: pointer;
  height: 71px;
  width: 71px;
  padding: 20px;
  overflow: hidden;
  transition: ${theme.transition};
  background-color: ${props =>
    props.color ? lighten(0.03, props.color.dark) : "black"};

  &:hover {
    z-index: 3;
    box-shadow: 0 5px 70px ${transparentize(0.8, "black")};

    ${MenuIcon}::before, ${MenuIcon}::after, ${MenuIcon} span {
      background-color: ${props => (props.color ? props.color.dark : "black")};
    }

    ${MenuIcon}::before {
      transform: translateY(-1px);
    }

    ${MenuIcon}::after {
      transform: translateY(1px);
    }
  }

  &:focus {
    outline: none;
  }
`;

export const Wrapper = styled.header`
  top: 0;
  left: 0;
  z-index: 10;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: stretch;
  transition: ${theme.transition};
  box-shadow: 0 5px 60px ${transparentize(0.9, "black")};

  ${Logo}::before, ${MenuButton}::before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    transform: translateX(-105%);
    transition: ${theme.transition};
    background-color: ${props => (props.color ? props.color.light : "white")};
  }

  ${Logo}:hover::before, ${MenuButton}:hover::before {
    opacity: 1;
    transform: none;
  }
`;
