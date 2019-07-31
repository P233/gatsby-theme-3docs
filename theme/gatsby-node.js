const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, actions, getNode }) => {
  if (node.internal.type !== "Mdx") return;

  const { sourceInstanceName } = getNode(node.parent);

  actions.createNodeField({
    node,
    name: `sourceInstanceName`,
    value: sourceInstanceName
  });

  if (sourceInstanceName === "docs") {
    const slug = createFilePath({ node, getNode });
    actions.createNodeField({
      node,
      name: `slug`,
      value: `/docs${slug}`
    });

    let parentsArray = slug
      .replace(/^\/|\/$/g, "")
      .split("/")
      .slice(0, -1);

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
};
