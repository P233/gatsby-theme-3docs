import { useStaticQuery, graphql } from "gatsby";

export default (isAscOrder = false) => {
  const { allMdx } = useStaticQuery(graphql`
    {
      allMdx(
        filter: { fields: { sourceInstanceName: { eq: "docs" } } }
        sort: { fields: frontmatter___chapterStringIndex, order: ASC }
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
  `);

  return allMdx.group
    .map(({ edges }) => ({
      version: edges[0].node.fields.version,
      initPage: edges[0].node.fields.slug
    }))
    .sort((a, b) => {
      if (isAscOrder) {
        return a.version.localeCompare(b.version);
      } else {
        return b.version.localeCompare(a.version);
      }
    });
};
