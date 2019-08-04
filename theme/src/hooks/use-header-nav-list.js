import { useStaticQuery, graphql } from "gatsby";

export default () => {
  const { allMdx } = useStaticQuery(graphql`
    {
      allMdx(
        filter: {
          fields: { sourceInstanceName: { eq: "pages" } }
          frontmatter: { headerNavOrder: { gte: 0 } }
        }
        sort: { order: ASC, fields: frontmatter___headerNavOrder }
      ) {
        edges {
          node {
            frontmatter {
              title
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  return allMdx.edges.map(({ node }) => ({
    title: node.frontmatter.title,
    link: node.fields.slug
  }));
};
