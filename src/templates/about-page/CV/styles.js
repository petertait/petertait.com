import styled from "styled-components";
import { darken, transparentize } from "polished";
import { space } from "styled-system";

import theme from "config/theme";
import { Grid } from "components/Grid";
import { Text as StyledText, Markdown } from "components/Text";

export const Wrapper = styled.div`
  top: 0;
  right: 0;
  height: 100%;
  z-index: 21;
  position: fixed;
  width: 1000px;
  max-width: 100vw;
  transition: transform ${theme.transition};
  color: ${props => (props.colors ? props.colors.light : "white")};
  transform: translateX(${props => (props.isVisible ? "0" : "110%")});

  @media (min-width: ${theme.size.tablet}) {
    transition: transform ${theme.transition} 0.5s;

    &::before,
    &::after {
      content: "";
      top: 0;
      right: 0;
      width: 100vw;
      height: 100%;
      z-index: -1;
      opacity: 0.15;
      position: fixed;
      transform: translateX(${props => (props.isVisible ? "0" : "110%")});
      background-color: ${props =>
        darken(0.2, props.colors ? props.colors.dark : "white")};
    }

    &::before {
      transition: 0.65s ease-in 0.2s;
    }

    &::after {
      transition: 0.65s ease-in;
    }
  }
`;

export const Inner = styled.div`
  width: 100%;
  max-height: 100vh;
  overflow: auto;
  display: flex;
  flex-direction: column;
  -webkit-overflow-scrolling: touch;
  background-color: ${props => (props.colors ? props.colors.dark : "black")};

  @media (min-width: ${theme.size.desktop}) {
    box-shadow: 0 0 10px
        ${props =>
          transparentize(0.5, props.colors ? props.colors.dark : "black")},
      0 0 300px
        ${props =>
          transparentize(0.4, props.colors ? props.colors.dark : "black")};
  }
`;

export const Section = styled(Grid)`
  padding: 80px ${theme.gutter.medium};
  border-top: 1px solid ${props => transparentize(0.9, props.colors.light)};
`;

export const Subtitle = styled(StyledText)`
  opacity: 0.5;
  font-size: ${theme.font.size.zeta};

  @media (max-width: ${theme.size.tablet}) {
    margin-bottom: 10px;

    ${space};
  }
`;

export const Text = styled(Markdown)`
  opacity: 0.8;
  font-size: ${theme.font.size.zeta};

  @media (max-width: ${theme.size.tablet}) {
    margin: 10px auto;
  }
`;
