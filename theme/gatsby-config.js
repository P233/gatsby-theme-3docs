module.exports = (options = {}) => {
  return {
    plugins: [
      {
        resolve: `gatsby-plugin-mdx`,
        options: {
          extensions: [".mdx", ".md"],
          defaultLayouts: {
            docs: require.resolve("./src/layouts/doc.js"),
            default: require.resolve("./src/layouts/page.js")
          }
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
      }
    ]
  };
};
