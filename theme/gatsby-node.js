const { createFilePath } = require(`gatsby-source-filesystem`);
const RegularPageTemplate = require.resolve(`./src/templates/regular-page.js`);
const DocPageTemplate = require.resolve(`./src/templates/doc-page.js`);

exports.onCreateNode = ({ node, actions, getNode }) => {
  if (node.internal.type !== "Mdx") return;

  actions.createNodeField({
    node,
    name: `slug`,
    value: createFilePath({ node, getNode })
  });
};

exports.createPages = async ({ graphql, actions }) => {
  const result = await graphql(`
    {
      allMdx {
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
    const component = /^\/docs\//.test(slug)
      ? DocPageTemplate
      : RegularPageTemplate;

    actions.createPage({
      path: slug,
      component,
      context: {
        slug
      }
    });
  });
};
