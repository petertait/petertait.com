import CMS from "netlify-cms";

import HomePagePreview from "./preview-templates/HomePagePreview";
import ErrorPagePreview from "./preview-templates/ErrorPagePreview";

CMS.registerPreviewTemplate("home", HomePagePreview);
CMS.registerPreviewTemplate("error", ErrorPagePreview);
