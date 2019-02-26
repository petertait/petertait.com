import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import Layout from "components/Layout";
import { HeroBlock } from "components/Block";

export const ErrorPageTemplate = ({ page }) => (
  <>
    <HeroBlock
      width="100vw"
      maxWidth="100%"
      color={page.color}
      content={page.hero}
    />
  </>
);

const ErrorPage = ({ data }) => {
  const { frontmatter: page } = data.markdownRemark;
  return (
    <Layout content={page} color={page.color}>
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
        page {
          title
        }
        color {
          light
          dark
        }
        hero {
          shade
          heading
          subheading
          buttonPath
          buttonText
        }
      }
    }
  }
`;
