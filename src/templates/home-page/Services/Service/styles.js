import styled from "styled-components";
import styledMap from "styled-map";
import { transparentize } from "polished";

import theme from "config/theme";
import StyledText, { H3 } from "components/Text";

export const Wrapper = styled.div`
  padding: 50px 40px 40px;
  margin-left: 15px;
  width: calc(33.33% - 15px);
  border: 1px solid;

  border-color: ${styledMap("shade", {
    dark: props =>
      transparentize(0.7, props.colors ? props.colors.light : "white"),
    default: props =>
      transparentize(0.7, props.colors ? props.colors.dark : "black")
  })};

  @media (max-height: ${theme.size.maxHeight}) {
    padding: 30px 40px;
  }

  @media (max-width: ${theme.size.desktop}) {
    padding: 30px 20px 30px 30px;
  }

  @media (max-width: ${theme.size.tablet}) {
    width: 100%;
    margin: 0 0 15px;
  }

  @media (max-width: ${theme.size.mobile}) {
    padding: 30px;
  }
`;

export const Image = styled.img`
  width: 180px;
  height: 140px;
  display: flex;
  margin: auto;

  @media (max-height: ${theme.size.maxHeight}),
    (max-width: ${theme.size.desktop}) {
    width: 140px;
    height: 100px;
  }

  @media (max-width: ${theme.size.tablet}) {
    margin: 0;
  }
`;

export const Heading = styled(H3)`
  margin: 50px auto 20px;

  @media (max-height: ${theme.size.maxHeight}),
    (max-width: ${theme.size.tablet}) {
    margin-top: 30px;
  }
`;

export const Text = styled(StyledText)``;
