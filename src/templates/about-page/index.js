import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import Layout from "components/Layout";
import Button from "components/Button";
import Block, { HeroBlock } from "components/Block";

export const AboutPageTemplate = ({ page }) => (
  <>
    <HeroBlock colors={page.colors} content={page.hero} />
    <Block width="1200px" content={page.about} colors={page.colors}>
      {page.about.button && (
        <Button
          cover
          mt="90px"
          colors={page.colors}
          shade={page.about.shade}
          content={page.about.button}
        />
      )}
    </Block>
  </>
);

const AboutPage = ({ data }) => {
  const { frontmatter: page } = data.markdownRemark;
  return (
    <Layout content={page} colors={page.colors}>
      <AboutPageTemplate page={page} />
    </Layout>
  );
};

AboutPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default AboutPage;

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        page {
          title
        }
        colors {
          light
          dark
        }
        hero {
          shade
          heading
          subheading
          button {
            text
            path
          }
          background {
            relativePath
          }
        }
        about {
          shade
          heading
          subheading
          text
          button {
            text
            path
          }
        }
      }
    }
  }
`;
