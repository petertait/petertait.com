const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");
const { fmImagesToRelative } = require("gatsby-remark-relative-images");

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  return graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              templateKey
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()));
      return Promise.reject(result.errors);
    }

    const pages = result.data.allMarkdownRemark.edges;

    pages.forEach(edge => {
      const id = edge.node.id;

      if (edge.node.frontmatter.templateKey === "home-page") {
        pathName = "/";
        component = path.resolve(`src/pages/index.js`);
      } else if (edge.node.frontmatter.templateKey === "error-page") {
        pathName = "/404";
        component = path.resolve(`src/pages/404.js`);
      } else {
        pathName = edge.node.fields.slug;
        component = path.resolve(
          `src/templates/${String(edge.node.frontmatter.templateKey)}/index.js`
        );
      }

      createPage({
        path: pathName,
        component,
        // additional data can be passed via context
        context: {
          id
        }
      });
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  fmImagesToRelative(node); // convert image paths for gatsby images

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value
    });
  }
};
