import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import Block, { HeroBlock } from "components/Block";

import Layout from "components/Layout";

import Services from "templates/home-page/Services";
import Works from "templates/home-page/Works";

const HomePage = ({ data }) => {
  const { frontmatter: page } = data.markdownRemark;

  return (
    <Layout content={page} color={page.color}>
      <HeroBlock color={page.color} content={page.hero} />
      <Block width="1200px" color={page.color} content={page.services}>
        <Services content={page.services} color={page.color} />
      </Block>
      <Block
        width="1200px"
        shade="light"
        color={page.color}
        content={page.works}
      >
        <Works content={page.works} color={page.color} />
      </Block>
    </Layout>
  );
};

HomePage.propTypes = {
  data: PropTypes.object.isRequired
};

export default HomePage;

export const homePageQuery = graphql`
  query HomePage {
    markdownRemark(frontmatter: { templateKey: { eq: "home-page" } }) {
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
          shade
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
        works {
          shade
          heading
          text
          work {
            color
            client
            heading
            # image {
            #   childImageSharp {
            #     fluid(maxWidth: 700, quality: 50) {
            #       ...GatsbyImageSharpFluid_noBase64
            #     }
            #   }
            # }
          }
        }
      }
    }
  }
`;
