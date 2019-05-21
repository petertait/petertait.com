import styled from "styled-components";
import { transparentize, darken } from "polished";

import theme from "config/theme";
import { H4, H5 } from "components/Text";
import StyledImage from "components/Image";

export const Image = styled(StyledImage)`
  width: 100%;
  height: 400px;
  object-fit: cover;
  object-position: center;
  transition: ${theme.transition};

  @media (max-height: ${theme.size.maxHeight}),
    (max-width: ${theme.size.tablet}) {
    height: 300px;
  }

  @media (max-width: ${theme.size.mobile}) {
    height: 200px;
  }
`;

export const Client = styled(H5)`
  opacity: 0.5;
  transition: ${theme.transition};
`;

export const Wrapper = styled.div`
  position: relative;
  margin-left: 25px;
  width: calc(33.33% - 25px);
  cursor: pointer;

  @media (max-width: ${theme.size.tablet}) {
    width: 100%;
    margin: 0 0 40px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  &::before {
    content: "";
    width: 100%;
    height: calc(100% - 30px);
    top: -5px;
    left: -20px;
    opacity: 0;
    transform: scale(0.96);
    position: absolute;
    transition: ${theme.transition};
    border: 1px solid ${props => (props.colors ? props.colors.dark : "black")};

    @media (max-width: ${theme.size.tablet}) {
      left: -15px;
    }
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
            darken(0.2, props.colors ? props.colors.dark : "black")
          )};
    }
  }
`;

export const Inner = styled.div`
  margin-top: 30px;
  color: ${props => (props.colors ? props.colors.dark : "black")};

  @media (max-width: ${theme.size.tablet}) {
    margin-top: 15px;
  }
`;

export const Heading = styled(H4)`
  margin: 30px 0 5px;

  @media (max-width: ${theme.size.tablet}) {
    margin: 15px 0 0;
  }
`;
