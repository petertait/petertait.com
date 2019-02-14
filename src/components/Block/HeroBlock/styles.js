import styled from "styled-components";
import { color, width } from "styled-system";
import { darken, transparentize } from "polished";

import theme from "config/theme";

export const Wrapper = styled.div`
  position: relative;
  max-width: 1400px;

  ${width};
  ${color};

  &::after {
    content: "";
    width: 200px;
    height: 100vh;
    position: absolute;
    right: 0;
    top: 0;
    background: ${props =>
      props.bg
        ? `linear-gradient(to right, ${transparentize(
            1,
            props.bg
          )} 0%, ${transparentize(0, props.bg)} 100%)`
        : "none"};
  }
`;

export const Inner = styled.div`
  top: 0;
  left: 0;
  position: fixed;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  min-height: 100vh;
  padding: 20vh 120px 0 100px;
  flex-shrink: 0;
  white-space: normal;
  max-width: 1400px;

  ${width};
`;

export const Pattern = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
  z-index: -1;

  svg path {
    fill: ${props => darken(0.03, props.color || theme.color.blue)};
  }
`;
