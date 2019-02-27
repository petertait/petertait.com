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
    padding: 20px 40px 30px;
  }
`;

export const Image = styled.img`
  width: 180px;
  height: 140px;
  display: flex;
  margin: auto;

  @media (max-height: ${theme.size.maxHeight}) {
    width: 140px;
    height: 100px;
  }
`;

export const Heading = styled(H3)`
  margin: 50px auto 20px;

  @media (max-height: ${theme.size.maxHeight}) {
    margin-top: 20px;
  }
`;

export const Text = styled(StyledText)``;
