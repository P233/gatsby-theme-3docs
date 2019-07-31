import React from "react";
import useSiteMetadata from "../../hooks/use-site-metadata.js";
import useVersionList from "../../hooks/use-version-list.js";
import IconTwitter from "!url!../../assets/svg/twitter.svg";
import styles from "./Header.module.scss";

export default props => {
  const siteMetadata = useSiteMetadata();
  const versionList = useVersionList();

  return (
    <header className="styles.header">
      <a href="/">{siteMetadata.title}</a>

      <IconTwitter></IconTwitter>

      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/changelog">Changelog</a>
        </li>
      </ul>

      <ul>
        <li>
          <strong>{siteMetadata.currentVersion}</strong>
        </li>
        {versionList.map(i => (
          <li>
            <a href={i.initPage}>{i.version}</a>
          </li>
        ))}
      </ul>

      {siteMetadata.github && <a href={siteMetadata.github}>Github</a>}
      {siteMetadata.twitter && <a href={siteMetadata.twitter}></a>}

      <button>Theme</button>
    </header>
  );
};
