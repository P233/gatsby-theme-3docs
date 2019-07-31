import React from "react";
import classnames from "classnames";
import { StaticQuery, graphql } from "gatsby";
import useVersionList from "../../hooks/use-version-list.js";
import styles from "./SidebarTOC.module.scss";

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

const formatTitle = string => {
  return string
    .replace(/([a-z]|[A-Z]+)([A-Z])/g, "$1 $2")
    .replace(/(\w+)(\d+)/g, "$1 $2")
    .replace(/[-_]/g, " ");
};

const SidebarTOC = props => {
  const version = props.version;
  const group = props.data.allMdx.group;
  const versionArray = useVersionList().reduce((a, c) => {
    a.push(c.version);
    return a;
  }, []);
  const targetVersionRawData = group[versionArray.indexOf(version)].edges;
  const tocArray = createTocArray(targetVersionRawData);

  const renderTOC = (list, title) => (
    <ul>
      {title && (
        <li>
          <strong style={{ textTransform: "capitalize" }}>
            {formatTitle(title)}
          </strong>
        </li>
      )}
      {list.map(i => {
        if (Array.isArray(i.list)) {
          return <li key={i.title}>{renderTOC(i.list, i.title)}</li>;
        }
        return (
          <li key={i.url}>
            <a href={i.url}>{i.title}</a>
          </li>
        );
      })}
    </ul>
  );

  return (
    <aside className={classnames(styles.sidebar, props.className)}>
      {renderTOC(tocArray)}
    </aside>
  );
};

export default props => (
  <StaticQuery
    query={graphql`
      query {
        allMdx(
          sort: { fields: frontmatter___chapterStringIndex, order: ASC }
          filter: { fields: { sourceInstanceName: { eq: "docs" } } }
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
    `}
    render={data => <SidebarTOC data={data} {...props} />}
  ></StaticQuery>
);
