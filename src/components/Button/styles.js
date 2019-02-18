import styled from "styled-components";
import { readableColor } from "polished";
import { space, color, alignSelf } from "styled-system";
import { Link } from "gatsby";

import theme from "config/theme";

export const Arrow = styled.span`
  margin-right: -5px;
  margin-left: 10px;
  transition: transform ${theme.transition};
`;

export const Wrapper = styled(Link)`
  line-height: 1;
  display: flex;
  position: relative;
  cursor: pointer;
  padding: 17px 22px;
  align-self: flex-start;
  border: 2px solid;
  background-color: transparent;
  color: white;
  z-index: 1;
  overflow: hidden;
  font-size: ${theme.font.size.epsilon};

  &::before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    opacity: 0;
    transform: translateX(-105%);
    transition: ${theme.transition};
    background-color: ${props => props.color || "white"};
  }

  &:focus {
    outline: none;
  }

  &:hover {
    border-color: ${props => props.color || "white"};
    ${"" /* background-color: ${props => props.color || "white"}; */}
    color: ${props => (props.color ? readableColor(props.color) : "black")};

    &::before {
      transform: none;
      opacity: 1;
    }

    ${Arrow} {
      transform: translateX(5px);
    }
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  ${space};
  ${color};
  ${alignSelf};
`;
