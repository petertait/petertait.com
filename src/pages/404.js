import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import Layout from "components/Layout";
import { HeroBlock } from "components/Block";

export const ErrorPageTemplate = ({ page }) => (
  <>
    <HeroBlock
      pt="0"
      width="100vw"
      maxWidth="100%"
      colors={page.colors}
      content={page.hero}
    />
  </>
);

const ErrorPage = ({ data }) => {
  const { frontmatter: page } = data.markdownRemark;
  return (
    <Layout content={page}>
      <ErrorPageTemplate page={page} />
    </Layout>
  );
};

ErrorPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default ErrorPage;

export const errorPageQuery = graphql`
  query ErrorPage {
    markdownRemark(frontmatter: { templateKey: { eq: "error-page" } }) {
      frontmatter {
        title
        colors {
          light
          dark
        }
        hero {
          shade
          heading
          subheading
          button {
            path
            text
          }
        }
      }
    }
  }
`;
