module.exports = (options = {}) => {
  return {
    plugins: [
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `pages`,
          path: `src/pages/`
        }
      },
      {
        resolve: `gatsby-plugin-mdx`
      }
    ]
  };
};
