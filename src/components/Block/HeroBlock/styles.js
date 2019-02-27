import styled from "styled-components";
import styledMap from "styled-map";
import { width, maxWidth } from "styled-system";
import { darken } from "polished";

import theme from "config/theme";

export const Wrapper = styled.div`
  position: relative;
  width: 95vw;
  max-width: 1400px;

  ${width};
  ${maxWidth};

  @media (max-width: ${theme.size.desktop}) {
    width: 100%;
    max-width: 100%;
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
  padding: 80px 170px 0 80px;
  flex-shrink: 0;
  white-space: normal;
  max-width: 1400px;

  color: ${styledMap("shade", {
    dark: props => (props.colors ? props.colors.light : "white"),
    default: props => (props.colors ? props.colors.dark : "black")
  })};

  background-color: ${styledMap("shade", {
    dark: props => darken(0.03, props.colors ? props.colors.dark : "black"),
    default: props => darken(0.03, props.colors ? props.colors.light : "white")
  })};

  ${width};
  ${maxWidth}

  @media (max-width: ${theme.size.desktop}) {
    min-height: 0;
    position: relative;
    max-width: 100%;
    padding: 160px ${theme.gutter.medium} 80px;
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
