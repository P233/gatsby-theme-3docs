import React, { useState } from "react";
import useSiteMetadata from "../../hooks/use-site-metadata.js";
import useVersionList from "../../hooks/use-version-list.js";
import IconGitHub from "../../assets/svg/github.svg";
import IconTwitter from "../../assets/svg/twitter.svg";
import IconSun from "../../assets/svg/sun.svg";
import IconMoon from "../../assets/svg/moon.svg";
import styles from "./Header.module.scss";

export default props => {
  const siteMetadata = useSiteMetadata();
  const versionList = useVersionList();

  const $root = document.documentElement;
  const [theme, setThemeState] = useState(
    $root.getAttribute("data-theme") || "light"
  );

  const setTheme = name => {
    setThemeState(name);
    $root.setAttribute("data-theme", name);
    localStorage.setItem("theme", name);
  };

  return (
    <header className={styles.header}>
      <div className={styles.header__left}>
        <a href="/" className={styles.headerLogo}>
          {siteMetadata.title}
        </a>

        <nav className={styles.headerNav}>
          <a href="/" className={styles.headerNav__link}>
            Home
          </a>
        </nav>
      </div>

      <div className={styles.header__right}>
        <div className={styles.headerVersionDropdown}>
          <button>{siteMetadata.currentVersion}</button>
          {versionList.length > 1 && (
            <ul className={styles.headerVersionDropdown__menu}>
              {versionList.map(i => (
                <li key={i.version}>
                  <a href={i.initPage}>{i.version}</a>
                </li>
              ))}
            </ul>
          )}
        </div>

        {siteMetadata.github && (
          <a
            href={siteMetadata.github}
            className={styles.headerSocialLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconGitHub></IconGitHub>
          </a>
        )}
        {siteMetadata.twitter && (
          <a
            href={siteMetadata.twitter}
            className={styles.headerSocialLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconTwitter></IconTwitter>
          </a>
        )}

        <button
          onClick={() =>
            theme === "light" ? setTheme("dark") : setTheme("light")
          }
        >
          {theme === "light" ? <IconMoon></IconMoon> : <IconSun></IconSun>}
        </button>
      </div>
    </header>
  );
};
