import React from "react";
import PropTypes from "prop-types";

import ErrorPage from "pages/404";

const ErrorPagePreview = ({ entry }) => {
  const page = entry.getIn(["data"]).toJS();
  return <ErrorPage page={page} />;
};

ErrorPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  })
};

export default ErrorPagePreview;
