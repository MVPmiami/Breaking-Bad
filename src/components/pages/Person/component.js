import React from "react";
import styles from "./style.module.scss";
import FullCard from "../../organisms/FullCard";
import LinkToCatalog from "./../../atoms/LinkToCatalog";

const Person = ({ cleanData }) => {
  return (
    <div className={styles.currentPage}>
      <div>
        <LinkToCatalog cleanData={cleanData} />
        <FullCard />
      </div>
    </div>
  );
};

export default Person;
