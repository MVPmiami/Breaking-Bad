import React from "react";
import styles from "./style.module.scss";

const CatalogBtn = ({ isActiveBtn }) => {
  return (
    <div
      className={`${styles.btnWrapper} ${
        isActiveBtn ? styles.active : styles.disable
      }`}
    data-test-catalogbtn = "catalog-btn">
      <div className={styles.burger}>
        <span></span>
      </div>
      <div className={styles.text}>Catalog</div>
    </div>
  );
};

export default CatalogBtn;
