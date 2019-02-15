import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import Layout from "components/Layout";

const ErrorPage = ({ data }) => {
  const { frontmatter: page } = data.allMarkdownRemark.edges[0].node;

  return (
    <>
      <HeroBlock width="100vw" color="black" bg="white">
        <FitText minFontSize={80} maxFontSize={110}>
          <H1>{page.block1.heading}</H1>
        </FitText>
        {page.block1.subheading && (
          <FitText minFontSize={80} maxFontSize={110}>
            <H1
              color={transparentize(1, "black")}
              textStroke={`1px ${transparentize(0.5, "black")}`}
            >
              {page.block1.subheading}
            </H1>
          </FitText>
        )}
        <Button mt="100px" to={page.block1.buttonPath}>
          {page.block1.buttonText}
        </Button>
      </HeroBlock>
    </>
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
            block1 {
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
