import styled from "styled-components";
import styledMap from "styled-map";
import {
  color,
  space,
  width,
  zIndex,
  maxWidth,
  boxShadow,
  justifyContent
} from "styled-system";
import { darken } from "polished";

import theme from "config/theme";
import { Markdown, H3 } from "components/Text";
import { Wrapper as Button } from "components/Button/styles";

export const Wrapper = styled.div`
  display: flex;
  z-index: 1;
  flex-shrink: 0;
  height: 100vh;
  width: calc(100vw - 100px);
  white-space: normal;
  position: relative;
  overflow: hidden;
  max-width: 1300px;

  color: ${styledMap("shade", {
    dark: props => (props.colors ? props.colors.light : "white"),
    default: props => (props.colors ? props.colors.dark : "black")
  })};

  background-color: ${styledMap("shade", {
    dark: props => (props.colors ? props.colors.dark : "black"),
    default: props => (props.colors ? props.colors.light : "white")
  })};

  ${color};
  ${width};
  ${zIndex};
  ${maxWidth};

  & + & {
    box-shadow: 0 0 300px
      ${styledMap("shade", {
        dark: props => darken(0.08, props.colors ? props.colors.dark : "black"),
        default: props =>
          darken(0.1, props.colors ? props.colors.light : "white")
      })};
  }

  ${boxShadow};

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
  width: calc(100vw - 100px);
  max-width: 1300px;
  height: 100vh;
  position: absolute;
  align-content: center;
  flex-direction: column;
  justify-content: center;
  transform: translateZ(0);
  padding: 110px 80px 20px;

  ${width};
  ${space};
  ${justifyContent};

  &.pinned {
    position: fixed;
  }

  @media (max-height: ${theme.size.maxHeight}) {
    padding-top: 100px;

    ${space};
  }

  @media (max-width: ${theme.size.desktop}) {
    padding: 80px ${theme.gutter.medium};
    width: 100%;
    max-width: 100%;

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

export const Subheading = styled(Markdown)`
  margin-top: 20px;
  font-size: ${theme.font.size.upsilon};
`;

export const Text = styled(Markdown)`
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
