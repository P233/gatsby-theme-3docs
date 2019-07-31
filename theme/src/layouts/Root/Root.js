import React from "react";
import classnames from "classnames";
import Helmet from "react-helmet";
import Header from "../../components/Header";
import "../../styles/main.scss";
import styles from "./Root.module.scss";

export default props => (
  <div className={styles.root}>
    <Helmet>
      <link
        href="https://fonts.googleapis.com/css?family=Noto+Sans|Noto+Serif:400,400i,700|Roboto"
        rel="stylesheet"
      />
    </Helmet>

    <Header></Header>
    <div className={classnames(styles.root__body, props.bodyClassName)}>
      {props.children}
    </div>
  </div>
);
