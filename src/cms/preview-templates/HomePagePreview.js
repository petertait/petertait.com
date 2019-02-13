import React from "react";
import PropTypes from "prop-types";

import HomePage from "../../pages/index";

const HomePagePreview = ({ entry }) => {
  const data = entry.getIn(["data"]).toJS();
  return <HomePage data={data} />;
};

HomePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  })
};

export default HomePagePreview;
