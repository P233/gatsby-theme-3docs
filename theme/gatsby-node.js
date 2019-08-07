const path = require("path");
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, actions, getNode }) => {
  if (node.internal.type !== "Mdx") return;

  const { sourceInstanceName } = getNode(node.parent);
  const slug = createFilePath({ node, getNode });

  actions.createNodeField({
    node,
    name: `sourceInstanceName`,
    value: sourceInstanceName
  });

  if (sourceInstanceName === "docs") {
    let parentsArray = slug
      .replace(/^\/|\/$/g, "")
      .split("/")
      .slice(0, -1);

    actions.createNodeField({
      node,
      name: `slug`,
      value: `/docs${slug}`
    });
    actions.createNodeField({
      node,
      name: `version`,
      value: parentsArray.shift()
    });
    actions.createNodeField({
      node,
      name: `parents`,
      value: parentsArray
    });
  }

  if (sourceInstanceName === "pages") {
    actions.createNodeField({
      node,
      name: `slug`,
      value: slug
    });
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const result = await graphql(`
    query {
      allMdx(filter: { fields: { sourceInstanceName: { eq: "docs" } } }) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    throw result.errors;
  }

  result.data.allMdx.edges.forEach(({ node }) => {
    const { slug } = node.fields;

    actions.createPage({
      path: slug,
      component: require.resolve("./src/templates/DocTemplate/DocTemplate.js"),
      context: {
        slug
      }
    });
  });
};

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, "src"), "node_modules"]
    }
  });
};
