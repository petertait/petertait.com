import React from "react";
import PropTypes from "prop-types";

import { HomePageTemplate } from "pages/index";

const HomePagePreview = ({ entry }) => {
  const page = entry.getIn(["data"]).toJS();
  return <HomePageTemplate page={page} />;
};

HomePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  })
};

export default HomePagePreview;
