import React, { useState, useEffect } from "react";

import remark from "remark";
import recommended from "remark-preset-lint-recommended";
import remarkHtml from "remark-html";

export { markdownify, throttle, useOnScreen, useWindowScrollPosition };

function markdownify(text) {
  return remark()
    .use(recommended)
    .use(remarkHtml)
    .processSync(text)
    .toString();
}

function throttle(func, wait, options) {
  let context, args, result;
  let timeout = null;
  let previous = 0;
  if (!options) options = {};

  let later = function() {
    previous = options.leading === false ? 0 : Date.now();
    timeout = null;
    result = func.apply(context, args);
    if (!timeout) context = args = null;
  };

  return function() {
    let now = Date.now();

    if (!previous && options.leading === false) previous = now;
    let remaining = wait - (now - previous);
    context = this;
    args = arguments;

    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }

      previous = now;
      result = func.apply(context, args);

      if (!timeout) context = args = null;
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(later, remaining);
    }

    return result;
  };
}

function useWindowScrollPosition(options = {}) {
  if (typeof window === "undefined") {
    return null;
  }

  const { throttleMs = 10 } = options;

  const [scroll, setScroll] = React.useState(window.pageXOffset);

  const handle = throttle(() => {
    setScroll(window.pageXOffset);
  }, throttleMs);

  useEffect(() => {
    window.addEventListener("scroll", handle);

    return () => {
      window.removeEventListener("scroll", handle);
    };
  }, []);

  return scroll;
}

function useOnScreen(ref, rootMargin = "0px") {
  // State and setter for storing whether element is visible
  const [isIntersecting, setIntersecting] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update our state when observer callback fires
        setIntersecting(entry);
      },
      {
        rootMargin
      }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      observer.unobserve(ref.current);
    };
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return isIntersecting;
}
