import React from "react";

import Work from "./Work";

import { Wrapper, Inner } from "./styles";

const Works = ({ content, color }) => {
  return (
    <Wrapper>
      <Inner>
        {content.work.map((content, index) => (
          <Work content={content} key={index} color={color} />
        ))}
      </Inner>
    </Wrapper>
  );
};

export default Works;
