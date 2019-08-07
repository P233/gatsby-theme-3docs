import React, { useState } from "react";
import IconSun from "assets/icons/sun.svg";
import IconMoon from "assets/icons/moon.svg";

export default prop => {
  if (typeof window === "undefined") return null;

  const $root = window.document.documentElement;
  const [theme, setThemeState] = useState(
    $root.getAttribute("data-theme") || "light"
  );
  const setTheme = name => {
    setThemeState(name);
    $root.setAttribute("data-theme", name);
    window.localStorage.setItem("theme", name);
  };

  return (
    <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      {theme === "light" ? <IconMoon /> : <IconSun />}
    </button>
  );
};
