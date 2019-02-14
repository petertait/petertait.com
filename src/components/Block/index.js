import styled from "styled-components";
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

import HeroBlock from "./HeroBlock";

export const Block = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  position: relative;
  z-index: 1;
  min-height: 100vh;
  padding: 80px;
  flex-shrink: 0;
  white-space: normal;

  ${flex};
  ${space};
  ${width};
  ${order};
  ${color};
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

export default Block;
export { HeroBlock };
