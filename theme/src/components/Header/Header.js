import React, { useState } from "react";
import { Link } from "gatsby";
import useSiteMetadata from "hooks/use-site-metadata.js";
import useVersionList from "hooks/use-version-list.js";
import IconSun from "assets/svg/sun.svg";
import IconMoon from "assets/svg/moon.svg";
import styles from "./Header.module.scss";

const reqSocialMediaIcons = require.context(
  "assets/svg/social",
  true,
  /\.svg$/
);

export default props => {
  if (typeof window === `undefined`) return null;

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
        <Link to="/" className={styles.headerLogo}>
          {siteMetadata.title}
        </Link>

        <nav className={styles.headerNav}>
          <Link to="/" className={styles.headerNav__link}>
            Home
          </Link>
        </nav>
      </div>

      <div className={styles.header__right}>
        <div className={styles.headerVersionDropdown}>
          <button>{siteMetadata.currentVersion}</button>
          {versionList.length > 1 && (
            <ul className={styles.headerVersionDropdown__menu}>
              {versionList.map(i => (
                <li key={i.version}>
                  <Link to={i.initPage}>{i.version}</Link>
                </li>
              ))}
            </ul>
          )}
        </div>

        {siteMetadata.socialMedia.map(i => (
          <a
            key={i.name}
            href={i.link}
            className={styles.headerSocialLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            {reqSocialMediaIcons(`./${i.name.toLowerCase()}.svg`)()}
          </a>
        ))}

        <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
          {theme === "light" ? <IconMoon></IconMoon> : <IconSun></IconSun>}
        </button>
      </div>
    </header>
  );
};