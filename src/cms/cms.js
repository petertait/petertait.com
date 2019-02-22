import React from "react";
import CMS from "netlify-cms";
import { StyleSheetManager } from "styled-components";

import HomePagePreview from "./preview-templates/HomePagePreview";
import ErrorPagePreview from "./preview-templates/ErrorPagePreview";

CMS.registerPreviewTemplate("error", ErrorPagePreview);

CMS.registerPreviewTemplate("home", props => {
  const iframe = document.getElementsByTagName("iframe")[0];
  const iframeHeadElem = iframe.contentDocument.head;
  return (
    <StyleSheetManager target={iframeHeadElem}>
      <HomePagePreview {...props} />
    </StyleSheetManager>
  );
});
