import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { transparentize, lighten } from "polished";
import FitText from "react-fittext";

import Block, { HeroBlock } from "components/Block";
import { H1 } from "components/Text";
import Button from "components/Button";
import Layout from "components/Layout";

import HeroPattern from "templates/home-page/pattern-1.svg";

export const HomePageTemplate = ({ page }) => {
  return (
    <>
      <HeroBlock
        width="90vw"
        color="white"
        bg={lighten(0.03, "black")}
        pattern={<HeroPattern />}
      >
        <FitText minFontSize={80} maxFontSize={110}>
          <H1>{page.block1.heading}</H1>
        </FitText>
        {page.block1.subheading && (
          <FitText minFontSize={80} maxFontSize={110}>
            <H1
              color={transparentize(1, "white")}
              textStroke={`1px ${transparentize(0.5, "white")}`}
            >
              {page.block1.subheading}
            </H1>
          </FitText>
        )}
        <Button mt="100px" content={page.block1.button} />
      </HeroBlock>
      <Block width="1000px" color="white" bg="black" title="Services" />
    </>
  );
};

// HomePageTemplate.propTypes = {
//   title: PropTypes.string
// };

const HomePage = ({ data }) => {
  const { frontmatter: page } = data.allMarkdownRemark.edges[0].node;

  return (
    <Layout shade="dark" content={page}>
      <HomePageTemplate page={page} />
    </Layout>
  );
};

HomePage.propTypes = {
  data: PropTypes.object.isRequired
};

export default HomePage;

export const homePageQuery = graphql`
  query HomePage {
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "home-page" } } }
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
              button {
                text
                path
              }
            }
          }
        }
      }
    }
  }
`;
