import styled from "styled-components";
import { lighten, transparentize } from "polished";

import theme from "config/theme";

export const Wrapper = styled.div`
  min-width: 100vw;

  @media (min-width: ${theme.size.desktop}) {
    display: flex;
  }

  *::-moz-selection {
    background: ${props =>
      props.colors
        ? transparentize(0.7, lighten(0.4, props.colors.dark))
        : "black"};
  }

  *::selection {
    background: ${props =>
      props.colors
        ? transparentize(0.7, lighten(0.4, props.colors.dark))
        : "black"};
  }
`;
