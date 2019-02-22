import React from "react";
import PropTypes from "prop-types";

import AboutPage from "templates/about-page";

const AboutPagePreview = ({ entry }) => {
  const page = entry.getIn(["data"]).toJS();
  return <AboutPage page={page} />;
};

AboutPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  })
};

export default AboutPagePreview;
