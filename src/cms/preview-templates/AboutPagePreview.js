import React from "react";
import PropTypes from "prop-types";

import { AboutPageTemplate } from "templates/about-page";

const AboutPagePreview = ({ entry }) => {
  const data = entry.getIn(["data"]).toJS();
  return <AboutPageTemplate page={data} />;
};

AboutPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  })
};

export default AboutPagePreview;
