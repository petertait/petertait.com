import React from "react";

import { Wrapper, Inner, Pattern } from "./styles";

const HeroBlock = ({ bg, color, width, maxWidth, pattern, children }) => {
  return (
    <Wrapper bg={bg} width={width} maxWidth={maxWidth}>
      <Inner bg={bg} color={color} width={width} maxWidth={maxWidth}>
        {children}
        {pattern && <Pattern color={bg}>{pattern}</Pattern>}
      </Inner>
    </Wrapper>
  );
};

export default HeroBlock;
