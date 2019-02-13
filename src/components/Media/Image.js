import React from "react";
import styled from "styled-components";
import { width, height, space, maxWidth, display } from "styled-system";
// import PropTypes from "prop-types";
import GatsbyImage from "gatsby-image";

const Img = styled(GatsbyImage)`
  margin: auto;
  display: block;
  max-width: 100%;

  ${display};
  ${width};
  ${height};
  ${space};
  ${maxWidth};

  @media screen and (-ms-high-contrast: active),
    screen and (-ms-high-contrast: none) {
    display: none;
  }
`;

const Image = ({ content, ...props }) => {
  const { alt = "", childImageSharp, image } = content;

  if (!!image && !!image.childImageSharp) {
    return <Img fluid={image.childImageSharp.fluid} alt={alt} {...props} />;
  }

  if (!!childImageSharp) {
    return <Img fluid={childImageSharp.fluid} alt={alt} {...props} />;
  }

  if (!!image && typeof image === "string")
    return <Img src={image} as="img" alt={alt} {...props} />;

  return null;
};

// Image.propTypes = {
//   image: PropTypes.shape({
//     alt: PropTypes.string,
//     childImageSharp: PropTypes.object,
//     image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
//     style: PropTypes.object
//   })
// };

export default Image;
