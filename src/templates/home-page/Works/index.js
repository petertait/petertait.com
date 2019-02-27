import React from "react";

import Work from "./Work";

import { Wrapper, Inner } from "./styles";

const Works = ({ content, colors }) => {
  return (
    <Wrapper>
      <Inner>
        {content.work.map((content, index) => (
          <Work content={content} key={index} colors={colors} />
        ))}
      </Inner>
    </Wrapper>
  );
};

export default Works;
