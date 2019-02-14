import styled from "styled-components";
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
  font-size: ${theme.font.size.epsilon};

  &:focus {
    outline: none;
  }

  &:hover {
    color: black;
    border-color: ${props => props.color || "white"};
    background-color: ${props => props.color || "white"};

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
