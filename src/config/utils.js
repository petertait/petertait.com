import { useState, useEffect } from "react";

import remark from "remark";
import recommended from "remark-preset-lint-recommended";
import remarkHtml from "remark-html";

export {
  markdownify,
  throttle,
  useWindowScrollPosition,
  toggleScroll,
  replaceVerticalScrollByHorizontal,
  useOnClickOutside
};

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

  const [scroll, setScroll] = useState(window.pageXOffset);

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

function toggleScroll(isScrollable) {
  if (typeof window === "undefined") {
    return null;
  }

  const wrapper = document.querySelector(".tl-edges");
  // const keys = [32, 33, 34, 35, 36, 37, 38, 39, 40];

  // const preventScrollDefault = event => {
  //   event = event || window.event;
  //
  //   if (event.preventDefault) event.preventDefault();
  //   event.returnValue = false;
  // };

  // const keydown = event => {
  //   for (let index = keys.length; index--; ) {
  //     if (event.keyCode === keys[index]) {
  //       preventScrollDefault(event);
  //       return;
  //     }
  //   }
  // };
  //
  // const wheel = event => {
  //   preventScrollDefault(event);
  // };

  if (isScrollable) {
    wrapper.addEventListener("wheel", replaceVerticalScrollByHorizontal);
  } else {
    wrapper.removeEventListener("wheel", replaceVerticalScrollByHorizontal);
  }
}

function replaceVerticalScrollByHorizontal(event) {
  if (event.deltaY !== 0) {
    window.scroll(window.scrollX + event.deltaY * 5, window.scrollY);
    event.preventDefault();
  }
}

function useOnClickOutside(ref, handler) {
  if (!ref) {
    return;
  }

  useEffect(
    () => {
      const listener = event => {
        if (!ref.current || ref.current.contains(event.target)) {
          return;
        }

        handler(event);
      };

      document.addEventListener("mousedown", listener);
      document.addEventListener("touchstart", listener);

      return () => {
        document.removeEventListener("mousedown", listener);
        document.removeEventListener("touchstart", listener);
      };
    },
    [ref, handler]
  );
}
