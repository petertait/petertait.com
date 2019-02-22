import React from "react";
import PropTypes from "prop-types";

import { HomePageTemplate } from "pages/index";

import Layout from "../Layout";

const HomePagePreview = ({ entry }) => {
  const data = entry.getIn(["data"]).toJS();
  return (
    <Layout>
      <HomePageTemplate page={data} />
    </Layout>
  );
};

HomePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  })
};

export default HomePagePreview;
