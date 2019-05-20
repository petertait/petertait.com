import styled from "styled-components";

import { H5 } from "components/Text";

export const Wrapper = styled.div`
  height: 100vh;
  position: relative;
  padding-top: 40px;
`;

export const Heading = styled(H5)`
  position: absolute;
  top: 20px;
  left: 0;
  width: 100%;
  z-index: 2;
  text-align: center;
  opacity: 0.5;
`;

export const Logo = styled.img`
  width: 100%;
  height: auto;
  display: block;
  margin: 10px 0;

  &:first-of-type {
    margin-top: 50px;
  }
`;
