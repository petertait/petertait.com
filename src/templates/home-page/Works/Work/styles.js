import styled from "styled-components";
import { transparentize, darken } from "polished";

import theme from "config/theme";
import Text, { H4 } from "components/Text";
import StyledImage from "components/Image";

export const Image = styled(StyledImage)`
  width: 100%;
  height: 400px;
  object-fit: cover;
  object-position: center;
  transition: ${theme.transition};
`;

export const Client = styled(Text)`
  opacity: 0.3;
  transition: ${theme.transition};
  font-size: ${theme.font.size.zeta};
`;

export const Wrapper = styled.div`
  position: relative;
  margin-left: 25px;
  width: calc(33.33% - 25px);
  cursor: pointer;

  &::before {
    content: "";
    width: 100%;
    height: 90%;
    top: -5px;
    left: -20px;
    opacity: 0;
    transform: scale(0.96);
    position: absolute;
    transition: ${theme.transition};
    border: 1px solid ${props => (props.color ? props.color.dark : "black")};
  }

  &:hover {
    z-index: 2;

    &::before {
      opacity: 0.3;
      transform: scale(1);
    }

    ${Client} {
      opacity: 0.7;
    }

    ${Image} {
      transform: scale(0.98) translateZ(0);
      box-shadow: 0 5px 60px
        ${props =>
          transparentize(
            0.75,
            darken(0.2, props.color ? props.color.dark : "black")
          )};
    }
  }
`;

export const Inner = styled.div`
  margin-top: 30px;
  color: ${props => (props.color ? props.color.dark : "black")};
`;

export const Heading = styled(H4)`
  margin: 50px 0 5px;
  font-size: ${theme.font.size.epsilon};
  font-weight: ${theme.font.weight.bold};
`;
