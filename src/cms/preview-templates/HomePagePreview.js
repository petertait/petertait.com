import React from "react";
import { StyleSheetManager } from "styled-components";
import PropTypes from "prop-types";

import HomePage from "pages/index";

import CSSInjector from "../CSSInjector";

const HomePagePreview = ({ entry }) => {
  const data = entry.getIn(["data"]).toJS();

  console.log(data);

  return (
    <CSSInjector>
      <HomePage data={data} />
    </CSSInjector>
  );
};

// HomePagePreview.propTypes = {
//   entry: PropTypes.shape({
//     getIn: PropTypes.func
//   })
// };

export default HomePagePreview;
