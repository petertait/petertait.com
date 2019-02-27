import styled from "styled-components";
import styledMap from "styled-map";
import {
  space,
  width,
  zIndex,
  position,
  maxWidth,
  justifyContent
} from "styled-system";
import { darken } from "polished";

import theme from "config/theme";

import StyledText, { H3 } from "components/Text";

export const Wrapper = styled.div`
  display: flex;
  z-index: 1;
  height: 100vh;
  flex-shrink: 0;
  white-space: normal;
  position: relative;

  box-shadow: -100px 0 300px
    ${styledMap("shade", {
      dark: props => darken(0.03, props.colors ? props.colors.dark : "black"),
      default: props => darken(0.03, props.colors ? props.colors.dark : "black")
    })};

  color: ${styledMap("shade", {
    dark: props => (props.colors ? props.colors.light : "white"),
    default: props => (props.colors ? props.colors.dark : "black")
  })};

  background-color: ${styledMap("shade", {
    dark: props => (props.colors ? props.colors.dark : "black"),
    default: props => (props.colors ? props.colors.light : "white")
  })};

  ${width};
  ${zIndex};
  ${maxWidth};

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
  padding: 110px 80px 20px;
  height: 100vh;
  transform: translateZ(0);

  ${space};
  ${width};
  ${maxWidth};
  ${position};
  ${justifyContent};

  &.pinned {
    position: fixed;
  }

  @media (max-height: 700px) {
    justify-content: flex-start;
  }

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
