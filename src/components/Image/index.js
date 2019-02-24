import React from "react";

import Icon from "components/Icon";

import { Wrapper, Placeholder } from "./styles";

const Image = props => {
  if (!props.content && !props.src) {
    return (
      <Placeholder {...props}>
        <Icon icon={props.placeholder || "image"} />
      </Placeholder>
    );
  }

  if (!!props.src && typeof props.src === "string") {
    return <Wrapper src={props.src} as="img" alt={props.alt} {...props} />;
  }

  const { alt = "", childImageSharp, image } = props.content;

  if (!!image && !!image.childImageSharp) {
    return <Wrapper fluid={image.childImageSharp.fluid} alt={alt} {...props} />;
  }

  if (!!childImageSharp) {
    return <Wrapper fluid={childImageSharp.fluid} alt={alt} {...props} />;
  }

  if (!!image && typeof image === "string") {
    return <Wrapper src={image} as="img" alt={alt} {...props} />;
  }

  return null;
};

export default Image;
