import React from "react";

import Service from "./Service";

import { Wrapper, Inner, Heading, Text } from "./styles";

const Services = ({ content, color, shade }) => {
  return (
    <Wrapper>
      {content.heading && <Heading>{content.heading}</Heading>}
      {content.text && <Text>{content.text}</Text>}
      <Inner>
        {content.service.map((content, index) => (
          <Service content={content} key={index} color={color} shade={shade} />
        ))}
      </Inner>
    </Wrapper>
  );
};

export default Services;
