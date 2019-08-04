import React from "react";
import Header from "components/Header";
import MDXContainer from "components/MDXContainer";
import styles from "./PageLayout.module.scss";

export default props => (
  <div className={styles.pageContainer}>
    <Header></Header>
    abc
    <MDXContainer>{props.children}</MDXContainer>
  </div>
);
