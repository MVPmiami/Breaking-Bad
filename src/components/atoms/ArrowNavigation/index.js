import React from "react";
import styles from "./style.module.scss";
import backArrow from "./../../../assets/img/leftArr.png";
import rightArrow from "./../../../assets/img/rightArr.png";

const ArrowNavigation = ({
  currentPage,
  paginateToPrevPage,
  paginateToNextPage,
}) => {
  return (
    <div className={styles.arrowNavigation}>
      <img
        src={backArrow}
        className={`${styles.arrow} ${styles.arrowLeft}`}
        onClick={() => {
          paginateToPrevPage(currentPage);
        }}
      ></img>
      <img
        src={rightArrow}
        className={`${styles.arrow} ${styles.arrowRight}`}
        onClick={() => {
          paginateToNextPage(currentPage);
        }}
      ></img>
    </div>
  );
};

export default ArrowNavigation;
