import React from "react";
import classnames from "classnames";
import styles from "./MDXContainer.module.scss";

export default props => (
  <article className={classnames(styles.mdxContainer, props.className)}>
    {props.children}
  </article>
);
