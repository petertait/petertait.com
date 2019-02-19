import styled from "styled-components";
import styledMap from "styled-map";
import FitText from "react-fittext";
import { width, maxWidth } from "styled-system";
import { darken, lighten, transparentize } from "polished";

import { H1 } from "components/Text";

export const Wrapper = styled.div`
  position: relative;
  max-width: 1400px;

  ${width};
  ${maxWidth}

  &::after {
    content: "";
    width: 250px;
    height: 100vh;
    position: absolute;
    right: 0;
    top: 0;

    background: ${styledMap("shade", {
      light: props =>
        `linear-gradient(to right, ${transparentize(
          1,
          darken(0.03, props.color.light)
        )} 0%, ${transparentize(0, darken(0.03, props.color.light))} 100%)`,
      dark: props =>
        `linear-gradient(to right, ${transparentize(
          1,
          lighten(0.03, props.color.dark)
        )} 0%, ${transparentize(0, lighten(0.03, props.color.dark))} 100%)`,
      default: props =>
        `linear-gradient(to right, ${transparentize(
          1,
          "white"
        )} 0%, ${transparentize(0, "white")} 100%)`
    })};

    background: ${`linear-gradient(to right, ${transparentize(
      1,
      "black"
    )} 0%, ${transparentize(0.8, "black")} 100%)`};
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
  align-items: center;
  min-height: 100vh;
  padding: 50px 150px 0 100px;
  flex-shrink: 0;
  white-space: normal;
  max-width: 1400px;

  color: ${styledMap("shade", {
    light: props => (props.color ? props.color.dark : "black"),
    dark: props => (props.color ? props.color.light : "white"),
    default: props => (props.color ? props.color.dark : "black")
  })};

  background-color: ${styledMap("shade", {
    light: props => darken(0.03, props.color ? props.color.light : "white"),
    dark: props => darken(0.03, props.color ? props.color.dark : "black"),
    default: props => darken(0.03, props.color ? props.color.light : "white")
  })};

  ${width};
  ${maxWidth}
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
