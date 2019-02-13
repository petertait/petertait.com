import React from "react";

import Block from "components/Block";

import { Wrapper } from "./styles";

const HeroBlock = ({ children, ...props }) => {
  return (
    <Wrapper>
      <Block {...props}>{children}</Block>
    </Wrapper>
  );
};

export default HeroBlock;
