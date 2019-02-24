import React from "react";

import { Wrapper, Inner, Image, Heading, Client } from "./styles";

const Work = ({ content, color }) => {
  return (
    <Wrapper color={color}>
      {content.heading && <Heading>{content.heading}</Heading>}
      {content.client && <Client>{content.client}</Client>}
      <Inner color={color}>
        {content.image && <Image content={content.image} alt="" />}
      </Inner>
    </Wrapper>
  );
};

export default Work;
