import styled from "styled-components";
import {
  flex,
  color,
  space,
  width,
  order,
  height,
  minHeight,
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
  justifyContent,
  background
} from "styled-system";

import theme from "config/theme";

export const Grid = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  padding-left: ${theme.gutter};
  padding-right: ${theme.gutter};

  @media (max-width: ${theme.size.tablet}) {
    padding-left: 20px;
    padding-right: 20px;
  }

  ${flex};
  ${space};
  ${width};
  ${maxWidth};
`;

export default Grid;

export const Column = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  position: relative;

  ${flex};
  ${space};
  ${width};
  ${order};
  ${flexWrap};
`;
