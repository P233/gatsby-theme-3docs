module.exports = (options = {}) => {
  return {
    plugins: [
      {
        resolve: `gatsby-plugin-mdx`
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
