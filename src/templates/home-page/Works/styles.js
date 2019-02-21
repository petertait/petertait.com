import styled from "styled-components";

import Grid from "components/Grid";

export const Wrapper = styled.div`
  width: 100%;
`;

export const Inner = styled(Grid)`
  padding: 0;
  margin: 60px 0 0 -15px;
  width: calc(100% + 15px);
`;
