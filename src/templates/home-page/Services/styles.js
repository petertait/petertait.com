import styled from "styled-components";

import theme from "config/theme";
import { Grid } from "components/Grid";

export const Inner = styled(Grid)`
  padding: 0;
  margin: 50px 0 0 -15px;
  width: calc(100% + 15px);

  @media (max-height: ${theme.size.maxHeight}) {
    margin-top: 30px;
  }

  @media (max-width: ${theme.size.tablet}) {
    width: 100%;
    padding: 0;
    margin: 40px 0 0;
  }
`;
