import React from "react";
import Root from "./root.js";
import SidebarTOC from "../components/sidebar-toc.js";

export default ({ children }) => (
  <Root>
    <div>{children}</div>
    <SidebarTOC version="0.1.0"></SidebarTOC>
  </Root>
);
