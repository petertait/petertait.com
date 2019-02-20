import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import Block, { HeroBlock } from "components/Block";

import Layout from "components/Layout";

import Services from "templates/home-page/Services";

export const AboutPageTemplate = ({ page }) => {
  return (
    <>
      <HeroBlock color={page.color} content={page.hero} />
      <Block
        width="1200px"
        shade="dark"
        color={page.color}
        content={page.services}
      >
        <Services content={page.services} shade="dark" color={page.color} />
      </Block>
      <Block
        width="1200px"
        shade="light"
        color={page.color}
        content={page.services}
      >
        <Services content={page.services} shade="dark" color={page.color} />
      </Block>
    </>
  );
};

// AboutPageTemplate.propTypes = {
//   title: PropTypes.string
// };

const AboutPage = ({ data }) => {
  const { frontmatter: page } = data.markdownRemark;

  return (
    <Layout content={page} color={page.color} shade={page.hero.shade}>
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
        color {
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
