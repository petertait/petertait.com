import styled from "styled-components";
import { lighten, transparentize } from "polished";

export const Wrapper = styled.div`
  display: flex;

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
