import React from "react";
import Helmet from "react-helmet";
import Header from "../../components/Header";
import styles from "../../styles/main.module.scss";

export default ({ children }) => (
  <div className={styles.container}>
    <Helmet>
      <link
        href="https://fonts.googleapis.com/css?family=Noto+Sans|Noto+Serif:400,400i,700|Roboto"
        rel="stylesheet"
      />
    </Helmet>

    <Header></Header>
    <div className={styles.content}>{children}</div>
  </div>
);
