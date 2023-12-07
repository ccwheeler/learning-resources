import React from "react";
import styles from "./HorizontalScrollSimple.module.css";

const HorizontalScrollSimple = ({ children }) => {
  return <div className={`${styles.horizontalScrollWrapper} `}>{children}</div>;
};

export default HorizontalScrollSimple;
