import React from "react";
import Root from "../Root";
import MDXContainer from "../../components/MDXContainer";
import styles from "./PageLayout.module.scss";

export default props => (
  <Root>
    <div className={styles.pageContainer}>
      <MDXContainer>{props.children}</MDXContainer>
    </div>
  </Root>
);
