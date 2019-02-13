import styled from "styled-components";
import styledMap from "styled-map";
import { space, color } from "styled-system";
import { lighten } from "polished";
import { Link } from "gatsby";

import theme from "config/theme";

export const Wrapper = styled(Link)`
  line-height: 1;
  display: inline-block;
  position: relative;
  cursor: pointer;
  border: 1px solid;
  background-color: transparent;
  font-weight: ${theme.font.weight.bold};

  padding: ${styledMap("size", {
    small: "9px 12px",
    default: "12px 22px"
  })};

  font-size: ${styledMap("size", {
    small: theme.font.size.kappa,
    default: theme.font.size.zeta
  })};

  color: ${styledMap("shade", {
    ink: "white",
    default: theme.color.ink
  })};

  background-color: ${styledMap("shade", {
    ink: theme.color.ink,
    default: "transparent"
  })};

  &:focus {
    outline: none;
  }

  &:hover {
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  ${space};
  ${color};
`;
