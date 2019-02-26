import React, { useRef, useState } from "react";
import { useMount } from "react-use";

import { useOnScreen, useWindowScrollPosition } from "config/utils";
import { Column } from "components/Grid";
import Button from "components/Button";

import HeroBlock from "./HeroBlock";
import { Wrapper, Inner, Header, Heading, Text } from "./styles";

const Block = ({ width, color, content, children, ...props }) => {
  const wrapper = useRef(null);
  const [ref, setRef] = useState(null);
  const { x } = useWindowScrollPosition();

  useMount(() => setRef(wrapper));

  const wrapperOffsetLeft = ref && ref.current.offsetLeft;
  const wrapperWidth = ref && ref.current.clientWidth;

  const isPinned =
    wrapperOffsetLeft < x && wrapperOffsetLeft + wrapperWidth > x;

  return (
    <Wrapper
      color={color}
      shade={content.shade}
      ref={wrapper}
      width={width}
      {...props}
    >
      <Inner width={width} isPinned={isPinned} {...props}>
        <Header>
          {(content.heading || content.text) && (
            <Column flex="1" width="auto" justifyContent="center">
              {content.heading && <Heading>{content.heading}</Heading>}
              {content.text && <Text>{content.text}</Text>}
            </Column>
          )}
          <Button
            size="small"
            color={color}
            shade={content.shade}
            content={content.button}
          />
        </Header>
        {children}
      </Inner>
    </Wrapper>
  );
};

export default Block;
export { HeroBlock };
