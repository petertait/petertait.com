import styled from "styled-components";
import { transparentize } from "polished";
import {
  width,
  height,
  space,
  maxWidth,
  maxHeight,
  display,
  color
} from "styled-system";
import GatsbyImage from "gatsby-image";

import { Wrapper as Icon } from "components/Icon/styles";

export const Wrapper = styled(GatsbyImage)`
  margin: auto;
  display: block;
  max-width: 100%;
  position: ${props => props.position || "relative"} !important;

  ${display};
  ${width};
  ${height};
  ${space};
  ${maxWidth};
  ${maxHeight};
`;

export const Placeholder = styled.div`
  width: 100%;
  height: 100%;
  min-width: 200px;
  display: flex;
  justify-content: center;
  align-content: center;

  ${Icon} {
    height: 100%;
    width: 100%;
    padding: 50px;

    ${height};
  }

  svg {
    height: 100%;
    width: 100%;
    align-self: center;
    color: ${transparentize(0.9, "black")};
  }

  ${color};
`;
