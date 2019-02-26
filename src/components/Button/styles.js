import styled from "styled-components";
import styledMap from "styled-map";
import { space, alignSelf } from "styled-system";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { darken, transparentize } from "polished";

import theme from "config/theme";

export const Arrow = styled.span`
  top: 1px;
  margin: 0 -5px 0 10px;
  position: relative;
  transition: transform ${theme.transition};
`;

export const Wrapper = styled(AniLink)`
  line-height: 1;
  display: flex;
  position: relative;
  cursor: pointer;
  align-self: flex-start;
  border: 1px solid;
  background-color: transparent;
  z-index: 1;
  overflow: hidden;
  transition: ${theme.transition};

  font-size: ${styledMap("size", {
    small: theme.font.size.zeta,
    default: theme.font.size.epsilon
  })};

  padding: ${styledMap("size", {
    small: "13px 18px",
    default: "18px 22px 16px"
  })};

  color: ${styledMap("shade", {
    dark: props => (props.color ? props.color.light : "white"),
    default: props => (props.color ? props.color.dark : "black")
  })};

  border-color: ${styledMap("shade", {
    dark: props =>
      transparentize(0.7, props.color ? props.color.light : "white"),
    default: props =>
      transparentize(0.7, props.color ? props.color.dark : "black")
  })};

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

  &:focus {
    outline: none;
  }

  &:hover {
    box-shadow: 0 5px 70px
      ${props =>
        transparentize(
          0.7,
          darken(0.2, props.color ? props.color.dark : "black")
        )};

    border-color: ${styledMap("shade", {
      dark: props => (props.color ? props.color.light : "white"),
      default: props => (props.color ? props.color.dark : "black")
    })};

    color: ${styledMap("shade", {
      dark: props => (props.color ? props.color.dark : "black"),
      default: props => (props.color ? props.color.light : "white")
    })};

    &::before {
      transform: none;
      opacity: 1;
    }

    ${Arrow} {
      transform: ${styledMap("size", {
        small: "translateX(3px)",
        default: "translateX(5px)"
      })};
    }
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  ${space};
  ${alignSelf};
`;
