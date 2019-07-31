import { useStaticQuery, graphql } from "gatsby";
export const useVersionList = () => {
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
                  version
                }
              }
            }
          }
        }
      }
    `
  );
  return allMdx.group.map(i => i.edges[0].node.fields.version);
};
