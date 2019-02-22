import styled from "styled-components";
import styledMap from "styled-map";
import {
  space,
  width,
  zIndex,
  maxWidth,
  alignItems,
  justifyContent
} from "styled-system";
import StyledText, { H3 } from "components/Text";

import theme from "config/theme";

export const Wrapper = styled.div`
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

  ${space};
  ${width};
  ${zIndex};
  ${maxWidth};
  ${alignItems};
  ${justifyContent};

  @media (max-width: ${theme.size.desktop}) {
    min-height: 0;
    max-width: 100%;
    width: 100%;
    padding: 80px ${theme.gutter.medium};

    ${space};
  }
`;

export const Heading = styled(H3)`
  margin-bottom: 20px;
`;

export const Text = styled(StyledText)`
  font-size: ${theme.font.size.upsilon};
`;
