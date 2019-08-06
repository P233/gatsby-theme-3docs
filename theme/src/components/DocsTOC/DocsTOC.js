import React from "react";
import { Link } from "gatsby";
import classnames from "classnames";
import useDocsToc from "hooks/use-docs-toc.js";
import IconChevronDown from "assets/icons/chevron-down.svg";
import IconChevronRight from "assets/icons/chevron-right.svg";
import styles from "./DocsTOC.module.scss";

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
        <li>
          <div
            className={classnames(styles.tocEntry, styles.title)}
            style={{ textTransform: "capitalize" }}
          >
            <IconChevronDown className={styles.tocEntry__icon} />
            <span className={styles.tocEntry__body}>{formatTitle(title)}</span>
          </div>
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
              className={styles.tocEntry}
              activeClassName={styles.active}
            >
              <IconChevronRight className={styles.tocEntry__icon} />
              <span className={styles.tocEntry__body}>{i.title}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );

  return (
    <aside className={classnames(styles.docsTOC, props.className)}>
      {renderTOC(tocArray)}
    </aside>
  );
};
