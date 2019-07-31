import React from "react";
import Root from "../Root";
import SidebarTOC from "../../components/SidebarTOC";
import styles from "./DocLayout.module.scss";

export default props => {
  const currentVersion = props.uri.replace(/^\/|\/$/g, "").split("/")[1];
  return (
    <Root>
      <div>{props.children}</div>
      <SidebarTOC version={currentVersion}></SidebarTOC>
    </Root>
  );
};
