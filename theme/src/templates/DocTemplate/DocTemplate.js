import React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Root from "layouts/Root";
import SEO from "components/SEO";
import Header from "components/Header";
import SidebarTOC from "components/SidebarTOC";
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
          <main className="docPage__content">
            <MDXContainer className={styles.docBody}>
              <MDXRenderer children={mdx.body} />
            </MDXContainer>
          </main>
          <SidebarTOC
            className={styles.docPage__docsTOC}
            currentVersion={mdx.fields.version}
          ></SidebarTOC>
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
    }
  }
`;
