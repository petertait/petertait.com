import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import Layout from "components/Layout";

const ErrorPage = ({ data }) => {
  const { frontmatter: page } = data.allMarkdownRemark.edges[0].node;

  return <Layout shade="dark" footerShade="dark" content={page} />;
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
            hero {
              heading
              description
              buttonPath
              buttonText
            }
          }
        }
      }
    }
  }
`;
