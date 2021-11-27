import React from "react";
import styles from "./style.module.scss";

const Toogle = ({ isList, toogle }) => {
  return (
    <div className={styles.headerCatalog}>
      <h2 className={styles.headerText}>Catalog</h2>
      <div className={styles.toogles}>
        <div className={styles.list} onClick={toogle}>
          <div
            className={`${styles.rectangle1} ${isList ? styles.active : ""}`}
          ></div>
          <div
            className={`${styles.rectangle1} ${isList ? styles.active : ""}`}
          ></div>
        </div>
        <div className={styles.grid} onClick={toogle}>
          <div
            className={`${styles.rectangle2} ${!isList ? styles.active : ""}`}
          ></div>
          <div
            className={`${styles.rectangle2} ${!isList ? styles.active : ""}`}
          ></div>
          <div
            className={`${styles.rectangle2} ${!isList ? styles.active : ""}`}
          ></div>
          <div
            className={`${styles.rectangle2} ${!isList ? styles.active : ""}`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Toogle;
