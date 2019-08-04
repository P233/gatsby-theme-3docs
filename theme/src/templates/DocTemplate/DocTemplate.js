import React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Root from "layouts/Root";
import Header from "components/Header";
import SidebarTOC from "components/SidebarTOC";
import MDXContainer from "components/MDXContainer";
import styles from "./DocTemplate.module.scss";

export default props => (
  <Root>
    <div className={styles.docPage}>
      <Header />
      <div className={styles.docPage__body}>
        <main className="docPage__content">
          <MDXContainer className={styles.docBody}>
            <MDXRenderer children={props.data.mdx.body} />
          </MDXContainer>
        </main>
        <SidebarTOC
          className={styles.docPage__docsTOC}
          currentVersion={props.data.mdx.fields.version}
        ></SidebarTOC>
      </div>
    </div>
  </Root>
);

export const pageQuery = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      fields {
        version
      }
      body
    }
  }
`;
