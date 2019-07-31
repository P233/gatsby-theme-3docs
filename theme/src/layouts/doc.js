import React from "react";
import SidebarTOC from "../components/sidebar-toc.js";

export default ({ children }) => (
  <div>
    <div>{children}</div>
    <SidebarTOC version="0.1.0"></SidebarTOC>
  </div>
);
