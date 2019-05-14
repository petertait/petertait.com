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

import { Text as StyledText, H3 } from "components/Text";
import { Wrapper as Button } from "components/Button/styles";

export const Wrapper = styled.div`
  display: flex;
  z-index: 1;
  flex-shrink: 0;
  min-height: 100vh;
  white-space: normal;
  position: relative;

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

  & + & {
    box-shadow: -100px 0 300px
      ${styledMap("shade", {
        dark: props => darken(0.03, props.colors ? props.colors.dark : "black"),
        default: props =>
          darken(0.03, props.colors ? props.colors.light : "white")
      })};
  }

  &:last-child {
    flex: 1;
  }

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
  min-height: 100vh;
  align-content: center;
  flex-direction: column;
  justify-content: center;
  padding: 110px 80px 20px;
  transform: translateZ(0);

  ${space};
  ${width};
  ${maxWidth};
  ${position};
  ${justifyContent};

  &.pinned {
    position: fixed;
  }

  @media (max-height: ${theme.size.maxHeight}) {
    padding-top: 100px;
  }

  @media (max-width: ${theme.size.desktop}) {
    min-height: 0;
    max-width: 100%;
    width: 100%;
    padding: 80px ${theme.gutter.medium};

    ${space};
  }

  @media (max-width: ${theme.size.tablet}) {
    padding: 60px ${theme.gutter.small};

    ${space};
  }

  @media (max-width: ${theme.size.mobile}) {
    padding: 50px ${theme.gutter.tiny};

    ${space};
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: ${theme.size.tablet}) {
    flex-direction: column;

    ${Button} {
      margin-top: 30px;
    }
  }
`;

export const Heading = styled(H3)`
  margin: 0;
`;

export const Subheading = styled(StyledText)`
  margin-top: 20px;
  font-size: ${theme.font.size.upsilon};
`;

export const Text = styled(StyledText)`
  margin-top: 30px;

  @media (min-width: ${theme.size.tablet}) {
    margin-top: 40px;
    column-fill: auto;
    columns: 2;
  }

  p {
    margin-bottom: 20px;
  }
`;
