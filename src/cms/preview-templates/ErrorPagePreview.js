import React from "react";
import PropTypes from "prop-types";

import { ErrorPageTemplate } from "../../pages/404";

const ErrorPagePreview = ({ entry }) => {
  const page = entry.getIn(["data"]).toJS();
  return <ErrorPageTemplate page={page} />;
};

ErrorPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  })
};

export default ErrorPagePreview;
