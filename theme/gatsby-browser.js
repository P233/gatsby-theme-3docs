exports.onClientEntry = () => {
  var theme = localStorage.getItem("theme") || "light";
  document.documentElement.setAttribute("data-theme", theme);
};
