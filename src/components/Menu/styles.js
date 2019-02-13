import styled from "styled-components";
import { Link } from "gatsby";
import { darken, transparentize } from "polished";
import styledMap from "styled-map";

import theme from "config/theme";

import { Grid } from "components/Grid";

export const NavButton = styled(Link)`
  margin-left: 25px;
  font-size: ${theme.font.size.epsilon};

  @media (max-width: ${theme.size.mobile}) {
    margin: 0;
    padding: 12px 20px 14px;
    width: 100%;
    border-bottom: 1px solid ${theme.color.indigo2};
  }
`;

export const Wrapper = styled(Grid)`
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  display: flex;
  align-items: center;
  padding-top: 30px;
  position: absolute;
  justify-content: space-between;
  z-index: 10;

  * {
    -webkit-font-smoothing: subpixel-antialiased;
  }

  ${NavButton} {
    color: ${styledMap("shade", {
      dark: theme.color.indigo4,
      default: transparentize(0.4, theme.color.indigo3)
    })};

    &:hover,
    &.active {
      color: ${styledMap("shade", {
        dark: "white",
        default: theme.color.indigo2
      })};
    }

    @media (max-width: ${theme.size.mobile}) {
      color: ${theme.color.indigo4};

      &:hover,
      &.active {
        color: white;
      }
    }
  }
`;

export const Logo = styled.img`
  height: 20px;
  width: auto;
  transition: ${theme.transition};

  &:hover {
    opacity: 0.7;
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  transition: ${theme.transition};

  @media (max-width: ${theme.size.mobile}) {
    position: absolute;
    width: 100%;
    top: -2px;
    left: 0;
    flex-direction: column;
    background-color: ${darken(0.02, theme.color.indigo)};
    transform: ${props => (props.isVisible ? "none" : "translateY(-100%)")};
  }
`;

export const MenuHeader = styled.div`
  display: none;
  justify-content: flex-start;
  width: 100%;
  padding: 30px 20px 10px;
  background-color: ${darken(0.02, theme.color.indigo)};
  border-bottom: 1px solid ${theme.color.indigo2};

  @media (max-width: ${theme.size.mobile}) {
    display: block;
  }
`;

export const MenuButton = styled.button`
  display: none;
  border: none;
  position: absolute;
  right: 15px;
  top: 33px;
  cursor: pointer;
  width: 24px;
  z-index: 2;
  padding: 0;
  background-color: transparent;

  @media (max-width: ${theme.size.mobile}) {
    display: block;
  }

  span {
    margin-top: 5px;
    opacity: ${props => (props.isVisible ? "0" : "1")};
  }

  &::before,
  &::after,
  span {
    content: "";
    width: 100%;
    height: 2px;
    display: block;
    transition: ${theme.transition};
    transform-origin: 2px;

    background-color: ${styledMap("shade", {
      dark: "white",
      default: theme.color.indigo
    })};

    transform: ${styledMap("isVisible", {
      false: "none",
      true: "rotate(45deg)"
    })};

    @media (max-width: ${theme.size.mobile}) {
      background-color: ${styledMap("shade", {
        dark: "white",
        default: props => (props.isVisible ? "white" : theme.color.indigo)
      })};
    }
  }

  &::after {
    margin-top: 5px;

    transform: ${styledMap("isVisible", {
      false: "none",
      true: "rotate(-45deg)"
    })};
  }

  &:focus {
    outline: none;
  }
`;
