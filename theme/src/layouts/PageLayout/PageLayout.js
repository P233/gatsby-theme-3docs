import React from "react";
import Root from "layouts/Root";
import Header from "components/Header";
import MDXContainer from "components/MDXContainer";
import styles from "./PageLayout.module.scss";

export default props => (
  <Root>
    <div className={styles.pageContainer}>
      <Header />
      <main className={styles.pageMain}>
        <MDXContainer className={styles.pageBody}>
          {props.children}
        </MDXContainer>
      </main>
    </div>
  </Root>
);
