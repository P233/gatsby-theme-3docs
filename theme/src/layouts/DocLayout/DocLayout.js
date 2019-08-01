import React from "react";
import Root from "../Root";
import MDXContainer from "../../components/MDXContainer";
import SidebarTOC from "../../components/SidebarTOC";
import styles from "./DocLayout.module.scss";

const findVersionFromPath = path => {
  const keywordsList = path.replace(/^\/|\/$/g, "").split("/");
  const docsIndex = keywordsList.indexOf("docs");
  return keywordsList[docsIndex + 1];
};

export default props => {
  const currentVersion = findVersionFromPath(props.path);
  return (
    <Root>
      <div className={styles.docPageContainer}>
        <div className={styles.doc}>
          <MDXContainer className={styles.doc__body}>
            {props.children}
          </MDXContainer>
        </div>
        {currentVersion && (
          <SidebarTOC
            className={styles.docSidebar}
            currentVersion={currentVersion}
            currentPath={props.path}
          ></SidebarTOC>
        )}
      </div>
    </Root>
  );
};
