import styled from "styled-components";

import theme from "config/theme";
import Grid from "components/Grid";

export const Wrapper = styled.div`
  width: 100%;
`;

export const Inner = styled(Grid)`
  padding: 0;
  margin: 70px 0 30px -25px;
  width: calc(100% + 25px);

  @media (max-height: ${theme.size.maxHeight}) {
    margin-top: 30px;
  }
`;
