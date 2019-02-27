import React from "react";

import { Wrapper, Image, Heading, Text } from "./styles";

const Service = ({ content, colors, shade }) => {
  return (
    <Wrapper colors={colors} shade={shade}>
      {content.image && (
        <Image src={`/media/${content.image.relativePath}`} alt="" />
      )}
      {content.heading && <Heading>{content.heading}</Heading>}
      {content.text && <Text>{content.text}</Text>}
    </Wrapper>
  );
};

export default Service;
