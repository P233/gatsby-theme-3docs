import React from "react";
import { Link } from "gatsby";
import classnames from "classnames";
import useDocsToc from "hooks/use-docs-toc.js";
import IconChevronDown from "assets/svg/chevron-down.svg";
import IconChevronRight from "assets/svg/chevron-right.svg";
import IconChevronsLeft from "assets/svg/chevrons-left.svg";
import styles from "./SidebarTOC.module.scss";

export default props => {
  const tocArray = useDocsToc(props.currentVersion);

  const formatTitle = string => {
    return string
      .replace(/([a-z]|[A-Z]+)([A-Z])/g, "$1 $2")
      .replace(/(\w+)(\d+)/g, "$1 $2")
      .replace(/[-_]/g, " ");
  };

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
              {props.currentPath === i.url ? (
                <IconChevronsLeft
                  className={classnames(styles.tocEntry__icon, styles.active)}
                />
              ) : (
                <IconChevronRight className={styles.tocEntry__icon} />
              )}
              <span className={styles.tocEntry__body}>{i.title}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );

  return <aside className={styles.sidebarTOC}>{renderTOC(tocArray)}</aside>;
};
