import React from "react";

import { Wrapper, Inner, Image, Heading, Client } from "./styles";

const Work = ({ content, colors }) => {
  return (
    <Wrapper colors={colors}>
      {content.heading && <Heading>{content.heading}</Heading>}
      {content.client && <Client>{content.client}</Client>}
      <Inner colors={colors}>
        {content.image && <Image content={content.image} alt="" />}
      </Inner>
    </Wrapper>
  );
};

export default Work;
