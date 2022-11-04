import React from "react";
import styles from "./title.module.css";

const Title = ({ title }) => {
  return (
    <div className={styles.title}>
      <h1>{title}</h1>
      <span></span>
    </div>
  );
};

export default Title;
