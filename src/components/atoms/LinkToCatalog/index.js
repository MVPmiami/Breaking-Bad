import React from "react";
import styles from "./style.module.scss";
import { Link } from "react-router-dom";

const linkToCatalog = ({ cleanData }) => {
  return (
    <div className={styles.currentPage}>
      <div>
        <Link to={"/catalog"} className={styles.linkToCatalog}>
          <div
            className={styles.arrowBack}
            onClick={() => {
              cleanData();
            }}
          ></div>
          <p
            onClick={() => {
              cleanData();
            }}
          >
            Back to Catalog
          </p>
        </Link>
      </div>
    </div>
  );
};

export default linkToCatalog;
