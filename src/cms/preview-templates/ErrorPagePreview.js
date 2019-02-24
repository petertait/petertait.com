import React from "react";
import PropTypes from "prop-types";

import { ErrorPageTemplate } from "pages/index";

import Layout from "../Layout";

const ErrorPagePreview = ({ entry }) => {
  const data = entry.getIn(["data"]).toJS();
  return (
    <Layout>
      <ErrorPageTemplate page={data} />
    </Layout>
  );
};

ErrorPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  })
};

export default ErrorPagePreview;
