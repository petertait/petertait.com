import styled from "styled-components";
import { darken, transparentize } from "polished";

import theme from "config/theme";

export const Wrapper = styled.div`
  top: 0;
  right: 0;
  height: 100%;
  z-index: 21;
  position: fixed;
  width: 1000px;
  max-width: 100vw;
  transition: ${theme.transition} 0.5s;
  color: ${props => (props.colors ? props.colors.light : "white")};
  transform: translateX(${props => (props.isVisible ? "0" : "120%")});

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
    transform: translateX(${props => (props.isVisible ? "0" : "120%")});
    background-color: ${props =>
      darken(0.2, props.colors ? props.colors.dark : "white")};
  }

  &::before {
    transition: 0.65s ease-in 0.2s;
  }

  &::after {
    transition: 0.65s ease-in;
  }
`;

export const Inner = styled.div`
  width: 100%;
  max-height: 100vh;
  overflow: auto;
  display: flex;
  flex-direction: column;
  padding: 100px ${theme.gutter.tiny};
  background-color: ${props => (props.colors ? props.colors.dark : "black")};
  box-shadow: 0 0 10px
      ${props =>
        transparentize(0.5, props.colors ? props.colors.dark : "black")},
    0 0 300px
      ${props =>
        transparentize(0.4, props.colors ? props.colors.dark : "black")};
`;
