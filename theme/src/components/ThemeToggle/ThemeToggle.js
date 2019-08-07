import React, { useState } from "react";
import IconSun from "assets/icons/sun.svg";
import IconMoon from "assets/icons/moon.svg";

export default prop => {
  if (typeof window === "undefined") return null;

  const $root = window.document.documentElement;
  const [theme, setThemeState] = useState(
    $root.getAttribute("data-theme") || "light"
  );
  const setTheme = () => {
    const targetTheme = theme === "light" ? "dark" : "light";
    setThemeState(targetTheme);
    $root.setAttribute("data-theme", targetTheme);
    window.localStorage.setItem("theme", targetTheme);
  };

  return (
    <button onClick={setTheme}>
      {theme === "light" ? <IconMoon /> : <IconSun />}
    </button>
  );
};
