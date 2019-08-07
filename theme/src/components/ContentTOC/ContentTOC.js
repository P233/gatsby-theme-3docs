import React from "react";
import classnames from "classnames";
import IconChevronRight from "assets/icons/chevron-right.svg";
import styles from "./ContentTOC.module.scss";

export default props => {
  const renderTOC = (list = [], isNested = false) => (
    <ul>
      {list.map(i => {
        if (Array.isArray(i.items)) {
          return (
            <>
              <li>
                <a href={i.url} className={styles.tocEntry}>
                  <IconChevronRight className={styles.tocEntry__icon} />
                  <span className={styles.tocEntry__body}>{i.title}</span>
                </a>
              </li>
              <li>{renderTOC(i.items, true)} </li>
            </>
          );
        }
        return (
          <li key={i.title}>
            <a href={i.url} className={styles.tocEntry}>
              <IconChevronRight className={styles.tocEntry__icon} />
              <span className={styles.tocEntry__body}>{i.title}</span>
            </a>
          </li>
        );
      })}
    </ul>
  );

  return (
    <aside className={classnames(styles.contentTOC, props.className)}>
      {renderTOC(props.tocArray)}
    </aside>
  );
};
