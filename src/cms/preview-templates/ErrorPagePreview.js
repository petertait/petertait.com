import React from "react";
import PropTypes from "prop-types";

import ErrorPage from "../../pages/404";

const ErrorPagePreview = ({ entry }) => {
  const data = entry.getIn(["data"]).toJS();
  return <ErrorPage page={data} />;
};

ErrorPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  })
};

export default ErrorPagePreview;
