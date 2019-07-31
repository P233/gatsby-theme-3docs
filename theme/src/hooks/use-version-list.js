import { useStaticQuery, graphql } from "gatsby";

export default () => {
  const { allMdx } = useStaticQuery(
    graphql`
      {
        allMdx(
          sort: { fields: frontmatter___chapterStringIndex, order: ASC }
          filter: { fields: { sourceInstanceName: { eq: "docs" } } }
        ) {
          group(field: fields___version, limit: 1) {
            edges {
              node {
                fields {
                  slug
                  version
                }
              }
            }
          }
        }
      }
    `
  );
  return allMdx.group.map(i => ({
    version: i.edges[0].node.fields.version,
    initPage: i.edges[0].node.fields.slug
  }));
};
