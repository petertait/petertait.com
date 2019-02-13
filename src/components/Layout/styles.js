import styled from "styled-components";
import { color } from "styled-system";

import theme from "config/theme";

export const Wrapper = styled.div`
  display: flex;
  color: ${theme.color.ink};
  background-color: ${theme.color.paper};

  ${color};
`;
