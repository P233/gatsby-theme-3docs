const createMinifier = require("css-loader-minify-class");

module.exports = (options = {}) => {
  return {
    siteMetadata: {
      title: "Gatsby Theme 3Docs",
      description: "Gatsby theme for 3 columns documentation site.",
      currentVersion: "0.1.0"
    },
    plugins: [
      {
        resolve: `gatsby-plugin-mdx`,
        options: {
          extensions: [".mdx", ".md"],
          defaultLayouts: {
            docs: require.resolve("./src/layouts/DocLayout/index.js"),
            default: require.resolve("./src/layouts/PageLayout/index.js")
          },
          gatsbyRemarkPlugins: [
            {
              resolve: `gatsby-remark-relative-images`
            },
            {
              resolve: `gatsby-remark-images`,
              options: {
                maxWidth: 900,
                quality: 100
              }
            },
            `gatsby-remark-prismjs`,
            `gatsby-remark-external-links`,
            {
              resolve: `gatsby-remark-autolink-headers`,
              options: {
                icon: ``
              }
            }
          ]
        }
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `docs`,
          path: `src/pages/docs`
        }
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `pages`,
          path: `src/pages`
        }
      },
      {
        resolve: `gatsby-plugin-sass`,
        options: {
          cssLoaderOptions:
            process.env.NODE_ENV === `production`
              ? {
                  minimize: true,
                  getLocalIdent: createMinifier()
                }
              : {
                  localIdentName: `[local]`
                }
        }
      },
      {
        resolve: `gatsby-plugin-react-svg`
      },
      {
        resolve: `gatsby-plugin-react-helmet`
      }
    ]
  };
};
