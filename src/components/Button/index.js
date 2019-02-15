import React from "react";

import { Wrapper, Arrow } from "./styles";

const Button = ({ as, content, shade, size, ...props }) => {
  if (!content || !content.path || !content.text) {
    return null;
  }

  if (!content.path) {
    return (
      <Wrapper as="button" shade={shade} size={size} {...props}>
        {content.text}
        <Arrow>→</Arrow>
      </Wrapper>
    );
  }

  if (
    content.path.startsWith("https://") ||
    content.path.startsWith("http://")
  ) {
    return (
      <Wrapper
        as="a"
        href={content.path}
        shade={shade}
        size={size}
        target="_blank"
        {...props}
      >
        {content.text}
        <Arrow>→</Arrow>
      </Wrapper>
    );
  }

  return (
    <Wrapper
      as={as}
      href={as === "a" && content.path}
      shade={shade}
      size={size}
      to={content.path}
      {...props}
    >
      {content.text}
      <Arrow>→</Arrow>
    </Wrapper>
  );
};

export default Button;
