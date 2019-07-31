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
        <a href="/">{siteMetadata.title}</a>

        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/changelog">Changelog</a>
          </li>
        </ul>
      </div>

      <div className={styles.header__right}>
        <div className={styles.versionDropdown}>
          <button className={styles.versionDropdown__trigger}>
            {siteMetadata.currentVersion}
          </button>
          {versionList.length > 1 && (
            <ul className={styles.versionDropdown__menu}>
              {versionList.map(i => (
                <li key={i.version}>
                  <a href={i.initPage}>{i.version}</a>
                </li>
              ))}
            </ul>
          )}
        </div>

        {siteMetadata.github && (
          <a href={siteMetadata.github} className={styles.header__iconLink}>
            <IconGitHub></IconGitHub>
          </a>
        )}
        {siteMetadata.twitter && (
          <a href={siteMetadata.twitter} className={styles.header__iconLink}>
            <IconTwitter></IconTwitter>
          </a>
        )}

        <button
          className={styles.header__themeBtn}
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
