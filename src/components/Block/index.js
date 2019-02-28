import React, { useRef, useState } from "react";
import { useMount } from "react-use";

import { markdownify, useWindowScrollPosition } from "config/utils";
import { Column } from "components/Grid";
import Button from "components/Button";

import HeroBlock from "./HeroBlock";
import { Wrapper, Inner, Header, Heading, Subheading, Text } from "./styles";

const Block = ({ width, colors, content, children, ...props }) => {
  const wrapper = useRef(null);
  const [ref, setRef] = useState(null);
  const { x } = useWindowScrollPosition();

  useMount(() => setRef(wrapper));

  const wrapperOffsetLeft = ref && ref.current.offsetLeft;
  // const wrapperWidth = ref && ref.current.clientWidth;
  const isPinned = wrapperOffsetLeft < x;

  return (
    <Wrapper
      colors={colors}
      shade={content.shade}
      ref={wrapper}
      width={width}
      {...props}
    >
      <Inner width={width} className={isPinned && "pinned"} {...props}>
        <Header>
          {(content.heading || content.subheading) && (
            <Column flex="1" width="auto" justifyContent="center">
              {content.heading && <Heading>{content.heading}</Heading>}
              {content.subheading && (
                <Subheading>{content.subheading}</Subheading>
              )}
            </Column>
          )}
          <Button
            size="small"
            colors={colors}
            shade={content.shade}
            content={content.button}
          />
        </Header>
        {content.text && (
          <Text
            dangerouslySetInnerHTML={{ __html: markdownify(content.text) }}
          />
        )}
        {children}
      </Inner>
    </Wrapper>
  );
};

export default Block;
export { HeroBlock };
