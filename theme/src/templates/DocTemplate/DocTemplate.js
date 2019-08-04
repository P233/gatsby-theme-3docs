import React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import SidebarTOC from "../../components/SidebarTOC";
import styles from "./DocTemplate.module.scss";

export default props => (
  <div className={styles.docPageContainer}>
    <div className={styles.doc}>
      <MDXRenderer
        className={styles.doc__body}
        children={props.data.mdx.body}
      />
    </div>
    <SidebarTOC
      className={styles.docSidebar}
      currentVersion={props.data.mdx.fields.version}
      currentPath={props.path}
    ></SidebarTOC>
  </div>
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
