import React from "react";

import { Wrapper, Image, Heading, Text } from "./styles";

const Work = ({ content, color, shade }) => {
  return (
    <Wrapper color={color} shade={shade}>
      {content.image && (
        <Image src={`/media/${content.image.relativePath}`} alt="" />
      )}
      {content.heading && <Heading>{content.heading}</Heading>}
      {content.text && <Text>{content.text}</Text>}
    </Wrapper>
  );
};

export default Work;
