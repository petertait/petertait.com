import styled from "styled-components";
import {
  flex,
  space,
  width,
  order,
  maxWidth,
  alignItems,
  justifyContent
} from "styled-system";

import theme from "config/theme";

export const Grid = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  padding-left: ${theme.gutter.small};
  padding-right: ${theme.gutter.small};

  @media (max-width: ${theme.size.tablet}) {
    padding-left: ${theme.gutter.tiny};
    padding-right: ${theme.gutter.tiny};
  }

  ${flex};
  ${space};
  ${width};
  ${maxWidth};
  ${alignItems}
`;

export default Grid;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  align-items: flex-start;

  ${space};
  ${width};
  ${alignItems}
`;

export const Column = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;

  ${flex};
  ${space};
  ${width};
  ${order};
  ${justifyContent};
`;
