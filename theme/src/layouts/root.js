import React from "react";
import Helmet from "react-helmet";

const Root = ({ children }) => (
  <div className={styles.container}>
    <Helmet>
      <link
        href="https://fonts.googleapis.com/css?family=Noto+Sans|Noto+Serif:400,400i,700|Roboto"
        rel="stylesheet"
      />
    </Helmet>

    <div className={styles.content}>{children}</div>
  </div>
);

export default Root;
