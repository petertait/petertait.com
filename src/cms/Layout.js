import React from "react";
import { StyleSheetManager } from "styled-components";

import GlobalStyle from "config/global";

const Layout = ({ children }) => {
  const iframe = document.getElementsByTagName("iframe")[0];
  const iframeHeadElem = iframe.contentDocument.head;

  return (
    <>
      <StyleSheetManager target={iframeHeadElem}>
        <>
          <GlobalStyle />
          {children}
        </>
      </StyleSheetManager>
    </>
  );
};

export default Layout;
