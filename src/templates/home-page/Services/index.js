import React from "react";

import Service from "./Service";

import { Wrapper, Inner } from "./styles";

const Services = ({ content, colors }) => {
  const shade = content.shade;
  return (
    <Wrapper>
      <Inner>
        {content.service.map((content, index) => (
          <Service
            content={content}
            key={index}
            colors={colors}
            shade={shade}
          />
        ))}
      </Inner>
    </Wrapper>
  );
};

export default Services;
