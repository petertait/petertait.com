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
  flex-shrink: 0;
  transition: ${theme.transition};
  background-color: ${props =>
    props.colors ? lighten(0.09, props.colors.dark) : "black"};

  @media (max-width: ${theme.size.mobile}) {
    padding: 16px 14px 17px;
  }

  svg {
    height: 35px;
    width: auto;
    position: relative;
    z-index: 3;
    display: block;
    overflow: none;
    transition: ${theme.transition};

    path {
      transition: ${theme.transition};
      fill: ${props => (props.colors ? props.colors.light : "white")};
    }

    @media (max-width: ${theme.size.mobile}) {
      height: 30px;
    }
  }

  &:hover svg path {
    fill: ${props => (props.colors ? props.colors.dark : "black")};
  }
`;

export const MenuIcon = styled.div`
  position: relative;
  transition: ${theme.transition};

  transform: ${styledMap("isVisible", {
    false: "none",
    true: "translateX(3px)"
  })};

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
    transform-origin: 4px;
    transition: ${theme.transition};
    background-color: ${props => (props.colors ? props.colors.light : "white")};

    transform: ${styledMap("isVisible", {
      false: "none",
      true: "rotate(45deg)"
    })};

    @media (max-width: ${theme.size.mobile}) {
      transform-origin: 0.5px;
    }

    @media (max-width: 420px) {
      transform-origin: 1.2px;
    }
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
  overflow: hidden;
  padding: 20px 19px 20px 21px;
  transition: ${theme.transition};
  background-color: ${props =>
    lighten(0.05, props.colors ? props.colors.dark : "black")};

  @media (max-width: ${theme.size.mobile}) {
    height: 63px;
    width: 63px;
    padding: 20px;
  }

  @media (max-width: 420px) {
    width: 55px;
    padding: 20px 14px 20px 16px;
  }

  &:hover {
    ${MenuIcon}::before, ${MenuIcon}::after, ${MenuIcon} span {
      background-color: ${props =>
        props.colors ? props.colors.dark : "black"};
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

  @media (max-width: 420px) {
    width: 100%;
  }

  ${Logo}::before, ${MenuButton}::before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    transform: translateX(-105%);
    transition: ${theme.transition};
    background-color: ${props => (props.colors ? props.colors.light : "white")};
  }

  ${Logo}:hover::before, ${MenuButton}:hover::before {
    transform: none;
  }
`;

export const Inner = styled.div`
  display: flex;
  align-items: center;
  padding-left: 103px;
  max-width: 100%;
  transition: ${theme.transition};
  background-color: ${props =>
    lighten(0.05, props.colors ? props.colors.dark : "black")};
  box-shadow: 0 0 70px
    ${props => transparentize(0.8, props.colors ? props.colors.dark : "black")};

  transform: ${styledMap("isVisible", {
    false: "translateX(calc(-100% + 70px))",
    true: "translateX(-103px)"
  })};

  @media (max-width: ${theme.size.mobile}) {
    padding-left: 0;

    transform: ${styledMap("isVisible", {
      false: "translateX(calc(-100% + 59px))",
      true: "translateX(0)"
    })};
  }

  @media (max-width: 420px) {
    transform: ${styledMap("isVisible", {
      false: "translateX(calc(-100% + 54px))",
      true: "translateX(0)"
    })};
  }
`;

export const NavButton = styled(AniLink)`
  padding: 8px 10px;
  margin: 0 5px;
  font-size: ${theme.font.size.epsilon};

  @media (max-width: ${theme.size.mobile}) {
    font-size: ${theme.font.size.zeta};
  }

  @media (max-width: 450px) {
    margin: 0;
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  padding: 0 15px;
  transition: ${theme.transition};
  border-right: 1px solid ${transparentize(0.9, "white")};

  @media (max-width: 450px) {
    flex: 1;
    justify-content: space-between;
  }

  ${NavButton} {
    color: ${props =>
      transparentize(0.3, props.colors ? props.colors.light : "white")};
  }

  ${NavButton}.active,
  ${NavButton}:hover {
    color: ${props => (props.colors ? props.colors.light : "white")};
  }
`;
