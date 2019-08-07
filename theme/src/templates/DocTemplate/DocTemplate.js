import React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Root from "layouts/Root";
import SEO from "components/SEO";
import Header from "components/Header";
import DocsTOC from "components/DocsTOC";
import ContentTOC from "components/ContentTOC";
import MDXContainer from "components/MDXContainer";
import styles from "./DocTemplate.module.scss";

export default props => {
  const { mdx } = props.data;

  return (
    <Root>
      <SEO title={mdx.frontmatter.title}></SEO>

      <div className={styles.docPage}>
        <Header />
        <div className={styles.docPage__body}>
          <main className={styles.docPage__content}>
            <MDXContainer className={styles.docBody}>
              <h1>{mdx.frontmatter.title}</h1>
              <MDXRenderer children={mdx.body} />
            </MDXContainer>
          </main>
          <ContentTOC
            className={styles.docPage__docsTOC}
            tocArray={mdx.tableOfContents.items}
          ></ContentTOC>
          <DocsTOC
            className={styles.docPage__docsTOC}
            currentVersion={mdx.fields.version}
          ></DocsTOC>
        </div>
      </div>
    </Root>
  );
};

export const pageQuery = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      fields {
        version
      }
      frontmatter {
        title
      }
      body
      tableOfContents(maxDepth: 3)
    }
  }
`;
