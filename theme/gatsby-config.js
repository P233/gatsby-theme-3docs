const path = require("path");
const createMinifier = require("css-loader-minify-class");

const defaultOptions = {
  pageLayout: require.resolve("./src/layouts/PageLayout/index.js"),
  googleFonts: [
    {
      family: "Noto Serif",
      variants: ["400", "400i", "700"]
    },
    {
      family: "Roboto"
    }
  ]
};

module.exports = options => {
  options = { ...defaultOptions, ...options };

  return {
    siteMetadata: {
      title: "Gatsby Theme 3Docs",
      description: "Gatsby theme for 3 columns documentation site.",
      currentVersion: "0.1.0"
    },
    plugins: [
      {
        resolve: "gatsby-plugin-mdx",
        options: {
          extensions: [".mdx", ".md"],
          defaultLayouts: {
            pages: options.pageLayout
          },
          gatsbyRemarkPlugins: [
            {
              resolve: "gatsby-remark-relative-images"
            },
            {
              resolve: "gatsby-remark-images",
              options: {
                maxWidth: 900,
                quality: 100
              }
            },
            "gatsby-remark-prismjs",
            "gatsby-remark-external-links",
            {
              resolve: "gatsby-remark-autolink-headers",
              options: {
                icon: ""
              }
            }
          ]
        }
      },
      {
        resolve: "gatsby-source-filesystem",
        options: {
          name: "docs",
          path: "src/docs"
        }
      },
      {
        resolve: "gatsby-source-filesystem",
        options: {
          name: "pages",
          path: "src/pages"
        }
      },
      {
        resolve: "gatsby-plugin-sass",
        options: {
          includePaths: [
            path.dirname(require.resolve("./src/styles/__common.scss"))
          ],
          cssLoaderOptions:
            process.env.NODE_ENV === "production"
              ? {
                  minimize: true,
                  getLocalIdent: createMinifier()
                }
              : {
                  localIdentName: "[local]"
                }
        }
      },
      {
        resolve: "gatsby-plugin-react-svg"
      },
      {
        resolve: "gatsby-plugin-react-helmet"
      },
      {
        resolve: "gatsby-plugin-prefetch-google-fonts",
        options: {
          fonts: options.googleFonts
        }
      },
      {
        resolve: "gatsby-plugin-manifest",
        options: {
          name: "gatsby-theme-3docs",
          short_name: "3docs",
          start_url: "/",
          background_color: "#663399",
          theme_color: "#663399",
          display: "minimal-ui"
        }
      },
      {
        resolve: "gatsby-plugin-offline"
      }
    ]
  };
};
