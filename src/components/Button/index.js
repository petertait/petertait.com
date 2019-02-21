import React from "react";
import { darken } from "polished";

import { Wrapper, Arrow } from "./styles";

const Button = ({ as, content, color, shade, size, ...props }) => {
  if (!content || !content.path || !content.text) {
    return null;
  }

  if (!content.path) {
    return (
      <Wrapper as="button" color={color} shade={shade} size={size} {...props}>
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
        color={color}
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
      color={color}
      shade={shade}
      size={size}
      duration={0.6}
      to={content.path}
      bg={color ? darken(0.1, color.dark) : "black"}
      {...props}
    >
      {content.text}
      <Arrow>→</Arrow>
    </Wrapper>
  );
};

export default Button;
