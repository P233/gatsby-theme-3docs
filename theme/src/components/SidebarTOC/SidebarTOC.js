import React from "react";
import { Link } from "gatsby";
import classnames from "classnames";
import { StaticQuery, graphql } from "gatsby";
import useVersionList from "../../hooks/use-version-list.js";
import IconChevronRight from "../../assets/svg/chevron-right.svg";
import IconChevronDown from "../../assets/svg/chevron-down.svg";
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
  const rawDataList = props.data.allMdx.group;
  const versionArray = useVersionList().reduce((a, c) => {
    a.push(c.version);
    return a;
  }, []);
  const targetVersionDataIndex = versionArray.indexOf(props.currentVersion);
  if (targetVersionDataIndex === -1) return null;

  const targetVersionRawData = rawDataList[targetVersionDataIndex].edges;
  const tocArray = createTocArray(targetVersionRawData);

  const renderTOC = (list, title, isNested = false) => (
    <ul>
      {title && (
        <li className={styles.tocEntry} style={{ textTransform: "capitalize" }}>
          <IconChevronDown className={styles.tocEntry__icon} />
          <span className={styles.tocEntry__body}>{formatTitle(title)}</span>
        </li>
      )}
      {list.map(i => {
        if (Array.isArray(i.list)) {
          return <li key={i.title}>{renderTOC(i.list, i.title, true)}</li>;
        }
        return (
          <li key={i.url}>
            <Link
              to={i.url}
              className={classnames(styles.tocEntry, {
                [styles.nested]: isNested
              })}
            >
              <IconChevronRight
                className={classnames(styles.tocEntry__icon, {
                  [styles.active]: props.currentPath === i.url
                })}
              />
              <span className={styles.tocEntry__body}>{i.title}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );

  return (
    <aside className={classnames(styles.sidebarTOC, props.className)}>
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
