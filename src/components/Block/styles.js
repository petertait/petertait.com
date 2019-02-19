import styled from "styled-components";
import styledMap from "styled-map";
import { lighten } from "polished";
import {
  flex,
  color,
  space,
  width,
  order,
  height,
  zIndex,
  display,
  borders,
  maxWidth,
  flexWrap,
  position,
  boxShadow,
  alignSelf,
  alignItems,
  justifySelf,
  flexDirection,
  justifyContent
} from "styled-system";

import { H3 } from "components/Text";

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  position: relative;
  z-index: 1;
  min-height: 100vh;
  padding: 80px;
  flex-shrink: 0;
  white-space: normal;

  color: ${styledMap("shade", {
    light: props => (props.color ? props.color.dark : "black"),
    dark: props => (props.color ? props.color.light : "white"),
    default: props => (props.color ? props.color.dark : "black")
  })};

  background-color: ${styledMap("shade", {
    light: props => (props.color ? props.color.light : "white"),
    dark: props => (props.color ? props.color.dark : "black"),
    default: props => (props.color ? props.color.light : "white")
  })};

  ${flex};
  ${space};
  ${width};
  ${order};
  ${height};
  ${zIndex};
  ${borders};
  ${display};
  ${position};
  ${maxWidth};
  ${flexWrap};
  ${boxShadow};
  ${alignSelf};
  ${alignItems};
  ${justifySelf};
  ${flexDirection};
  ${justifyContent};
`;

export const Title = styled(H3)`
  width: 100%;
`;
