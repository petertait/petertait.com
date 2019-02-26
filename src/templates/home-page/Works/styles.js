import styled from "styled-components";

import Grid from "components/Grid";

export const Wrapper = styled.div`
  width: 100%;
`;

export const Inner = styled(Grid)`
  padding: 0;
  margin: 75px 0 35px -25px;
  width: calc(100% + 25px);
`;
