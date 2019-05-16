import React, { useEffect } from "react";
import { useMedia, useMount, useLocation } from "react-use";

import theme from "config/theme";
import { replaceVerticalScrollByHorizontal } from "config/utils";

import { Wrapper } from "./styles";

const HorizontalLayout = ({ location, children }) => {
  useMount(() => {
    if (typeof window !== "undefined" && location.search !== "?cv") {
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
  const location = useLocation();
  const isDesktop = useMedia(`(min-width: ${theme.size.desktop})`);

  return (
    <Wrapper colors={colors}>
      {isDesktop ? (
        <HorizontalLayout location={location}>{children}</HorizontalLayout>
      ) : (
        <VerticalLayout>{children}</VerticalLayout>
      )}
    </Wrapper>
  );
};

export default Scroller;
