import { useStaticQuery, graphql } from "gatsby";

const createTocArray = rawData => {
  let toc = [];

  rawData.forEach(({ node }) => {
    let currentGroup = toc;
    node.fields.parents.forEach(groupTitle => {
      const lastEntry = currentGroup[currentGroup.length - 1];
      if (!lastEntry || lastEntry.title !== groupTitle) {
        currentGroup.push({
          title: groupTitle,
          list: []
        });
        currentGroup = currentGroup[currentGroup.length - 1].list;
      } else {
        currentGroup = lastEntry.list;
      }
    });

    currentGroup.push({
      title: node.frontmatter.title,
      url: node.fields.slug
    });
  });

  return toc;
};

export default targetVersion => {
  const { allMdx } = useStaticQuery(graphql`
    {
      allMdx(
        filter: { fields: { sourceInstanceName: { eq: "docs" } } }
        sort: { fields: frontmatter___chapterOrderString, order: ASC }
      ) {
        group(field: fields___version) {
          edges {
            node {
              frontmatter {
                title
              }
              fields {
                slug
                version
                parents
              }
            }
          }
        }
      }
    }
  `);

  const versionList = allMdx.group.map(i => i.edges[0].node.fields.version);
  const targetVersionIndex = versionList.indexOf(targetVersion);
  if (targetVersionIndex === -1) return [];

  const targetVersionRawData = allMdx.group[targetVersionIndex].edges;
  return createTocArray(targetVersionRawData);
};
