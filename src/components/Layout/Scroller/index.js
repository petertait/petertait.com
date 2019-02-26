import React from "react";
import { useMount, useUnmount } from "react-use";

import { Wrapper } from "./styles";

const Scroller = ({ color, children }) => {
  const replaceVerticalScrollByHorizontal = event => {
    if (event.deltaY !== 0) {
      window.scroll(window.scrollX + event.deltaY * 5, window.scrollY);
      event.preventDefault();
    }

    return;
  };

  useMount(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("wheel", replaceVerticalScrollByHorizontal);
    }
  });

  useUnmount(() => {
    if (typeof window !== "undefined") {
      window.removeEventListener("wheel", replaceVerticalScrollByHorizontal);
    }
  });

  return <Wrapper color={color}>{children}</Wrapper>;
};

export default Scroller;
