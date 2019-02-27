import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import Block, { HeroBlock } from "components/Block";
import Layout from "components/Layout";
import Services from "templates/home-page/Services";

const AboutPage = ({ data }) => {
  const { frontmatter: page } = data.markdownRemark;

  return (
    <Layout content={page} colors={page.colors} shade={page.hero.shade}>
      <HeroBlock colors={page.colors} content={page.hero} />
      <Block
        width="1200px"
        shade="dark"
        colors={page.colors}
        content={page.services}
      >
        <Services content={page.services} shade="dark" colors={page.colors} />
      </Block>
      <Block
        width="1200px"
        shade="light"
        colors={page.colors}
        content={page.services}
      >
        <Services content={page.services} shade="dark" colors={page.colors} />
      </Block>
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
        services {
          heading
          text
          service {
            heading
            text
            image {
              relativePath
            }
          }
        }
      }
    }
  }
`;
