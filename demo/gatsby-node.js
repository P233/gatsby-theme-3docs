exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [
            {
              loader: "@epegzz/sass-vars-loader",
              options: {
                syntax: "scss",
                vars: {
                  // Override style variables
                }
              }
            }
          ]
        }
      ]
    }
  });
};
