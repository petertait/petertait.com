import styled from "styled-components";
import { style, space, size, width, height, color } from "styled-system";

import theme from "config/theme";

const colorHover = style({
  prop: "colorHover",
  cssProperty: "color"
});

export const Wrapper = styled.span`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  transition: ${theme.transition};

  ${space};
  ${color};

  &:hover {
    ${colorHover};
  }
`;

export const Svg = styled.svg`
  width: 1em;
  height: 1em;
  fill: currentColor;
  vertical-align: middle;

  ${size};
  ${width};
  ${height};
`;
