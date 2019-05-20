import React, { useRef, useState } from "react";
import { useMount } from "react-use";

import { useWindowScrollPosition } from "config/utils";

import HeroBlock from "./HeroBlock";

import { Wrapper, Inner, Header, Heading, Subheading, Text } from "./styles";

const Block = ({ unPin, width, colors, content, children, ...props }) => {
  const wrapper = useRef(null);
  const [ref, setRef] = useState(null);
  const x = useWindowScrollPosition();

  useMount(() => setRef(wrapper));

  const wrapperOffsetLeft = ref && ref.current.offsetLeft;
  const isPinned = wrapperOffsetLeft < x;

  return (
    <Wrapper
      ref={wrapper}
      width={width}
      colors={colors}
      shade={content.shade}
      {...props}
    >
      <Inner
        width={width}
        className={!unPin && isPinned && "pinned"}
        {...props}
      >
        {children}
      </Inner>
    </Wrapper>
  );
};

export default Block;
export { HeroBlock, Header, Heading, Subheading, Text };
