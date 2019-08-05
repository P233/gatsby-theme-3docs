import React from "react";
import Root from "layouts/Root";
import SEO from "components/SEO";
import Header from "components/Header";
import MDXContainer from "components/MDXContainer";
import styles from "./PageLayout.module.scss";

export default props => {
  const { children, pageContext } = props;

  return (
    <Root>
      <SEO
        title={pageContext.frontmatter.title}
        description={pageContext.frontmatter.description}
        meta={pageContext.frontmatter.meta}
        lang={pageContext.frontmatter.lang}
      ></SEO>

      <div className={styles.pageContainer}>
        <Header />
        <main className={styles.pageMain}>
          <MDXContainer className={styles.pageBody}>{children}</MDXContainer>
        </main>
      </div>
    </Root>
  );
};
