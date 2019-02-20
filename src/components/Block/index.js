import React from "react";

import HeroBlock from "./HeroBlock";

import { Wrapper, Heading, Text } from "./styles";

const Block = ({ shade, content, children, ...props }) => {
  return (
    <Wrapper shade={shade || content.shade} {...props}>
      {content.heading && <Heading>{content.heading}</Heading>}
      {content.text && <Text>{content.text}</Text>}
      {children}
    </Wrapper>
  );
};

export default Block;
export { HeroBlock };
