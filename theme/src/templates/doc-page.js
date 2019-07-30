import React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

export default props => {
  const { mdx } = props.data;
  return (
    <div>
      <MDXRenderer children={mdx.body} />
      <aside>Sidebar</aside>
    </div>
  );
};

export const pageQuery = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
    }
  }
`;
