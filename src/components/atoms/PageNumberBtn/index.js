import React from "react";
import styles from "./style.module.scss";

const PageNumberBtn = ({ currentPage, numberPage, paginate }) => {
  return (
    <button
      className={`${styles.pageElement} ${
        currentPage === numberPage ? styles.active : ""
      }`}
      key={numberPage}
      onClick={() => {
        paginate(numberPage);
      }}
    >
      {numberPage}
    </button>
  );
};

export default PageNumberBtn;
