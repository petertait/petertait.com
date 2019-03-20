import React from "react";
import { useMedia, useMount } from "react-use";

import theme from "config/theme";
import { replaceVerticalScrollByHorizontal } from "config/utils";

import { Wrapper } from "./styles";

const HorizontalLayout = ({ children }) => {
  useMount(() => {
    if (typeof window !== "undefined") {
      const wrapper = document.querySelector(".tl-edges");
      wrapper.addEventListener("wheel", replaceVerticalScrollByHorizontal);
    }
  });

  return children;
};

const VerticalLayout = ({ children }) => {
  useMount(() => {
    if (typeof window !== "undefined") {
      const wrapper = document.querySelector(".tl-edges");
      wrapper.removeEventListener("wheel", replaceVerticalScrollByHorizontal);
    }
  });

  return children;
};

const Scroller = ({ colors, children }) => {
  const isDesktop = useMedia(`(min-width: ${theme.size.desktop})`);

  return (
    <Wrapper colors={colors}>
      {isDesktop ? (
        <HorizontalLayout>{children}</HorizontalLayout>
      ) : (
        <VerticalLayout>{children}</VerticalLayout>
      )}
    </Wrapper>
  );
};

export default Scroller;
