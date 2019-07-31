import React from "react";
import Root from "../Root";
import MDXContainer from "../../components/MDXContainer";
import SidebarTOC from "../../components/SidebarTOC";
import styles from "./DocLayout.module.scss";

export default props => {
  const currentVersion = props.uri.replace(/^\/|\/$/g, "").split("/")[1];
  return (
    <Root bodyClassName={styles.docPageContainer}>
      <div className={styles.doc}>
        <MDXContainer className={styles.doc__body}>
          {props.children}
        </MDXContainer>
      </div>
      <SidebarTOC
        className={styles.docSidebar}
        version={currentVersion}
      ></SidebarTOC>
    </Root>
  );
};
