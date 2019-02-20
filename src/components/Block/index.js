import styled from "styled-components";
import styledMap from "styled-map";
import { darken, transparentize } from "polished";
import {
  flex,
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

import HeroBlock from "./HeroBlock";

const Block = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  min-height: 100vh;
  padding: 80px;
  flex-shrink: 0;
  white-space: normal;

  color: ${styledMap("shade", {
    dark: props => (props.color ? props.color.light : "white"),
    default: props => (props.color ? props.color.dark : "black")
  })};

  background-color: ${styledMap("shade", {
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

  &::after {
    content: "";
    width: 50px;
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
      default: "none"
    })};
  }
`;

export default Block;
export { HeroBlock };
