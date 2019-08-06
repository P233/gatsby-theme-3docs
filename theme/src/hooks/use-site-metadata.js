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
          headerIconLinks {
            name
            url
          }
          lang
        }
      }
    }
  `);

  return site.siteMetadata;
};
