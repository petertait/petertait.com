import styled from "styled-components";
import styledMap from "styled-map";
import { width, maxWidth } from "styled-system";
import { darken, transparentize } from "polished";

import theme from "config/theme";

export const Wrapper = styled.div`
  position: relative;
  width: 95vw;
  max-width: 1400px;

  ${width};
  ${maxWidth};

  &::after {
    content: "";
    width: 200px;
    height: 100vh;
    position: absolute;
    right: 0;
    top: 0;

    background: ${styledMap("shade", {
      dark: props =>
        `linear-gradient(to right, ${transparentize(
          1,
          darken(0.05, props.color.dark)
        )} 0%, ${transparentize(0, darken(0.05, props.color.dark))} 100%)`,
      default: props =>
        `linear-gradient(to right, ${transparentize(
          1,
          darken(0.03, props.color.light)
        )} 0%, ${transparentize(0, darken(0.03, props.color.light))} 100%)`
    })};
  }
`;

export const Inner = styled.div`
  top: 0;
  left: 0;
  position: fixed;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  padding: 80px 170px 40px 80px;
  flex-shrink: 0;
  white-space: normal;
  max-width: 1400px;

  color: ${styledMap("shade", {
    dark: props => (props.color ? props.color.light : "white"),
    default: props => (props.color ? props.color.dark : "black")
  })};

  background-color: ${styledMap("shade", {
    dark: props => darken(0.03, props.color ? props.color.dark : "black"),
    default: props => darken(0.03, props.color ? props.color.light : "white")
  })};

  ${width};
  ${maxWidth}

  @media (max-width: ${theme.size.desktop}) {
    padding: 60px 100px 0 50px;
  }
`;

export const Pattern = styled.img`
  top: 0;
  left: 0;
  z-index: -1;
  width: 150%;
  height: 150%;
  object-position: bottom;
  object-fit: cover;
  position: absolute;
  opacity: 0.1;
`;
