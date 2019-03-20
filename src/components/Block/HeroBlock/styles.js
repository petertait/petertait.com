import styled from "styled-components";
import styledMap from "styled-map";
import { width, maxWidth } from "styled-system";
import { darken } from "polished";

import theme from "config/theme";

import { Wrapper as Button } from "components/Button/styles";

import { Wrapper as Block } from "../styles";

export const Wrapper = styled.div`
  position: relative;
  width: 95vw;
  max-width: 1400px;

  ${width};
  ${maxWidth};

  @media (max-width: ${theme.size.desktop}) {
    width: 100%;
    max-width: 100%;
  }

  & + ${Block} {
    box-shadow: -100px 0 300px
      ${styledMap("shade", {
        dark: props => darken(0.03, props.colors ? props.colors.dark : "black"),
        default: props =>
          darken(0.03, props.colors ? props.colors.light : "white")
      })};
  }
`;

export const Inner = styled.div`
  top: 0;
  left: 0;
  position: fixed;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  padding: 80px 170px 0 80px;
  flex-shrink: 0;
  white-space: normal;
  max-width: 1400px;

  color: ${styledMap("shade", {
    dark: props => (props.colors ? props.colors.light : "white"),
    default: props => (props.colors ? props.colors.dark : "black")
  })};

  background-color: ${styledMap("shade", {
    dark: props => darken(0.03, props.colors ? props.colors.dark : "black"),
    default: props => darken(0.03, props.colors ? props.colors.light : "white")
  })};

  ${width};
  ${maxWidth};

  ${Button} {
    margin-top: 100px;

    @media (max-height: ${theme.size.maxHeight}) {
      margin-top: 80px;
    }
  }

  @media (max-width: ${theme.size.desktop}) {
    min-height: 0;
    max-width: 100%;
    position: relative;
    padding: 180px ${theme.gutter.medium} 110px;

    ${Button} {
      margin-top: 80px;
    }
  }

  @media (max-width: ${theme.size.tablet}) {
    padding: 140px ${theme.gutter.small} 70px;

    ${Button} {
      margin-top: 60px;
    }
  }

  @media (max-width: ${theme.size.mobile}) {
    padding: 125px ${theme.gutter.tiny} 70px;

    ${Button} {
      margin-top: 40px;
    }
  }
`;

export const Pattern = styled.img`
  top: 0;
  left: 0;
  z-index: -1;
  width: 150%;
  height: 150%;
  object-position: bottom;
  object-fit: cover;
  position: absolute;
  opacity: 0.1;
`;
