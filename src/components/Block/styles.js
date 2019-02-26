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
import { darken, transparentize } from "polished";

import theme from "config/theme";

import StyledText, { H3 } from "components/Text";

export const Wrapper = styled.div`
  display: flex;
  z-index: 1;
  min-height: 100vh;
  flex-shrink: 0;
  white-space: normal;
  position: relative;
  justify-content: center;

  box-shadow: 0 0 300px
    ${styledMap("shade", {
      dark: props => darken(0.2, props.color ? props.color.dark : "black"),
      default: props => darken(0.2, props.color ? props.color.dark : "black")
    })};

  color: ${styledMap("shade", {
    dark: props => (props.color ? props.color.light : "white"),
    default: props => (props.color ? props.color.dark : "black")
  })};

  background-color: ${styledMap("shade", {
    dark: props => (props.color ? props.color.dark : "black"),
    default: props => (props.color ? props.color.light : "white")
  })};

  ${width};
  ${zIndex};
  ${maxWidth};
  ${alignItems};

  @media (max-width: ${theme.size.desktop}) {
    min-height: 0;
    max-width: 100%;
    width: 100%;
  }
`;

export const Inner = styled.div`
  top: 0;
  left: 0;
  display: flex;
  align-content: center;
  flex-direction: column;
  justify-content: center;
  padding: 100px 80px 40px;
  min-height: 100vh;

  position: ${styledMap("isPinned", {
    true: "fixed",
    default: "relative"
  })};

  ${space};
  ${width};
  ${maxWidth};
  ${justifyContent};

  @media (max-width: ${theme.size.desktop}) {
    min-height: 0;
    max-width: 100%;
    width: 100%;
    padding: 80px ${theme.gutter.medium};

    ${space};
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Heading = styled(H3)`
  margin: 0;
`;

export const Text = styled(StyledText)`
  margin-top: 20px;
  font-size: ${theme.font.size.upsilon};
`;
