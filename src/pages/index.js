import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { lighten, transparentize } from "polished";
import FitText from "react-fittext";

import Block, { HeroBlock } from "components/Block";
import { H1 } from "components/Text";
import Button from "components/Button";

import HeroPattern from "templates/home-page/pattern-2.svg";

const HomePage = ({ data }) => {
  const { frontmatter: page } = data.allMarkdownRemark.edges[0].node;

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
        <FitText minFontSize={80} maxFontSize={110}>
          <H1
            color={transparentize(1, "white")}
            textStroke={`1px ${transparentize(0.5, "white")}`}
          >
            A traditionally trained designer who codes.
          </H1>
        </FitText>
        <Button mt="100px" to="/contact">
          Available for Freelance
        </Button>
      </HeroBlock>
      <Block width="1000px" color="black" bg="black">
        <H1>{page.block1.heading}</H1>
      </Block>
    </>
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
            }
          }
        }
      }
    }
  }
`;
