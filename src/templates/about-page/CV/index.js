import React, { useRef } from "react";

import { useOnClickOutside } from "config/utils";

import { Wrapper, Inner } from "./styles";
import Header from "./Header";

const CV = ({ content, colors, onClose, isVisible }) => {
  const ref = isVisible ? useRef() : null;
  useOnClickOutside(ref, () => onClose());

  return (
    <>
      <Wrapper colors={colors} isVisible={isVisible}>
        <Inner colors={colors} ref={ref}>
          <Header content={content} colors={colors} onClose={onClose} />
        </Inner>
      </Wrapper>
    </>
  );
};

export default CV;
