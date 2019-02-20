import styled from "styled-components";
import { lighten, transparentize } from "polished";

export const Wrapper = styled.div`
  display: flex;

  *::-moz-selection {
    background: ${props =>
      props.color
        ? transparentize(0.7, lighten(0.4, props.color.dark))
        : "black"};
  }

  *::selection {
    background: ${props =>
      props.color
        ? transparentize(0.7, lighten(0.4, props.color.dark))
        : "black"};
  }
`;
