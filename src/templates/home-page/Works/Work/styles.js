import styled from "styled-components";
import { transparentize } from "polished";

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

export const Wrapper = styled.div`
  position: relative;
  margin-left: 15px;
  width: calc(33.33% - 15px);
  cursor: pointer;

  &:hover {
    z-index: 2;

    ${Image} {
      box-shadow: 0 5px 70px
        ${props =>
          transparentize(0.7, props.color ? props.color.dark : "black")};
    }
  }
`;

export const Inner = styled.div`
  margin-top: 30px;
  color: ${props => (props.color ? props.color.dark : "black")};
  background-color: ${props => (props.color ? props.color.dark : "black")};
`;

export const Heading = styled(H4)`
  margin: 30px 0 5px;
  background-color: white;
  font-size: ${theme.font.size.epsilon};
  font-weight: ${theme.font.weight.bold};
`;

export const Client = styled(Text)`
  opacity: 0.3;
  font-size: ${theme.font.size.zeta};
`;
