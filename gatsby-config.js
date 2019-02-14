const path = require("path");

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.petertait.com",
    title: "Peter Tait | Multifunctional designer + frontend developer.",
    description:
      "Multifunctional designer and frontend developer. Experienced with clients ranging from global corporations to family firms."
  },
  plugins: [
    "gatsby-plugin-react-svg",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-plugin-layout",
      options: {
        component: require.resolve("./src/components/Layout/index.js")
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-21049349-1"
      }
    },
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/static/media`,
        name: "uploads"
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages"
      }
    },
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        src: path.join(__dirname, "src"),
        pages: path.join(__dirname, "src/pages"),
        img: path.join(__dirname, "src/img"),
        config: path.join(__dirname, "src/config"),
        templates: path.join(__dirname, "src/templates"),
        components: path.join(__dirname, "src/components")
      }
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-relative-images",
            options: {
              name: "uploads"
            }
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2048
            }
          },
          {
            resolve: "gatsby-remark-copy-linked-files",
            options: {
              destinationDir: "static"
            }
          }
        ]
      }
    },
    {
      resolve: "gatsby-plugin-netlify-cms",
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`
      }
    },
    "gatsby-plugin-netlify" // make sure to keep it last in the array
  ]
};
