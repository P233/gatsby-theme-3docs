import { useStaticQuery, graphql } from "gatsby";

export default () => {
  const { site } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
          author
          currentVersion
          socialMedia {
            name
            link
          }
        }
      }
    }
  `);

  return site.siteMetadata;
};
