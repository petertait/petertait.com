import React from "react";

import Service from "./Service";

import { Wrapper, Inner } from "./styles";

const Services = ({ content, color }) => {
  const shade = content.shade;

  return (
    <Wrapper>
      <Inner>
        {content.service.map((content, index) => (
          <Service content={content} key={index} color={color} shade={shade} />
        ))}
      </Inner>
    </Wrapper>
  );
};

export default Services;
