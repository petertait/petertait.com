import React from "react";

import { Wrapper, Inner, Pattern } from "./styles";

const HeroBlock = ({ bg, color, width, pattern, children }) => {
  return (
    <Wrapper bg={bg} color={color} width={width}>
      <Inner width={width}>
        {children}
        {pattern && <Pattern color={bg}>{pattern}</Pattern>}
      </Inner>
    </Wrapper>
  );
};

export default HeroBlock;
