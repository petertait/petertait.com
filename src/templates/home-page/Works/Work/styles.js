import styled from "styled-components";
import styledMap from "styled-map";
import { transparentize } from "polished";

import StyledText, { H3 } from "components/Text";

export const Wrapper = styled.div`
  padding: 50px 40px 40px;
  margin-left: 15px;
  width: calc(33.33% - 15px);
  border: 1px solid;

  border-color: ${styledMap("shade", {
    dark: props =>
      transparentize(0.7, props.color ? props.color.light : "white"),
    default: props =>
      transparentize(0.7, props.color ? props.color.dark : "black")
  })};
`;

export const Image = styled.img`
  width: 180px;
  height: 140px;
  display: flex;
  margin: auto;
`;

export const Heading = styled(H3)`
  margin: 50px auto 20px;
`;

export const Text = styled(StyledText)``;
