import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import Layout from "components/Layout";
import { HeroBlock } from "components/Block";

const ErrorPage = ({ data }) => {
  const { frontmatter: page } = data.allMarkdownRemark.edges[0].node;

  return (
    <Layout content={page} color={page.color} shade={page.hero.shade}>
      <HeroBlock
        width="100vw"
        maxWidth="100%"
        color={page.color}
        content={page.hero}
      />
    </Layout>
  );
};

ErrorPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default ErrorPage;

export const errorPageQuery = graphql`
  query ErrorPage {
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "error-page" } } }
    ) {
      edges {
        node {
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
    }
  }
`;
