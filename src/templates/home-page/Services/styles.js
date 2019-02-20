import styled from "styled-components";

import theme from "config/theme";
import StyledText, { H3 } from "components/Text";
import Grid from "components/Grid";

export const Wrapper = styled.div`
  width: 100%;
`;

export const Inner = styled(Grid)`
  padding: 0;
  margin: 60px 0 0 -15px;
  width: calc(100% + 15px);
`;

export const Heading = styled(H3)`
  margin-bottom: 20px;
`;

export const Text = styled(StyledText)`
  font-size: ${theme.font.size.upsilon};
`;
