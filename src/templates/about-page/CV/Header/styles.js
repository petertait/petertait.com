import styled from "styled-components";
import { darken, transparentize } from "polished";

import theme from "config/theme";
import { Grid } from "components/Grid";
import { Markdown, H2 } from "components/Text";

export const Wrapper = styled(Grid)`
  padding: 100px ${theme.gutter.medium} 80px;
`;

export const Title = styled(H2)`
  letter-spacing: -1px;
  margin: 20px auto 60px;
  font-size: ${theme.font.size.mega};

  @media (max-width: ${theme.size.tablet}) {
    margin: 0 auto 50px;
    font-size: ${theme.font.size.alpha};
  }

  @media (max-width: ${theme.size.mobile}) {
    font-size: ${theme.font.size.beta};
  }
`;

export const CloseButton = styled.button`
  border: none;
  position: fixed;
  cursor: pointer;
  z-index: 10;
  height: 41px;
  width: 41px;
  top: 20px;
  right: 20px;
  overflow: hidden;
  padding: 6.5px 7px 6.5px 11px;
  background-color: transparent;
  transition: ${theme.transition};
  border: 1px solid
    ${props => transparentize(0.7, props.colors ? props.colors.light : "white")};

  &:focus {
    outline: none;
  }

  &::before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    transform: translateX(-105%);
    transition: ${theme.transition};
    background-color: ${props => (props.colors ? props.colors.light : "white")};
  }

  span::before,
  span::after {
    content: "";
    width: 100%;
    height: 2px;
    display: block;
    transform: rotate(45deg);
    transform-origin: 4.5px;
    transition: ${theme.transition};
    background-color: ${props => (props.colors ? props.colors.light : "white")};
  }

  span::after {
    margin-top: 6px;
    transform: rotate(-45deg);
  }

  &:hover {
    border-color: ${props => (props.colors ? props.colors.light : "white")};
    box-shadow: 0 5px 70px
      ${props =>
        transparentize(
          0.7,
          darken(0.2, props.colors ? props.colors.dark : "black")
        )};

    &::before {
      transform: none;
    }

    span::before,
    span::after {
      background-color: ${props =>
        props.colors ? props.colors.dark : "black"};
    }
  }
`;

export const Text = styled(Markdown)`
  opacity: 0.8;
  font-size: ${theme.font.size.zeta};
`;
