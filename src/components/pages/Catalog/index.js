import React from "react";
import styles from "./style.module.scss";
import CardList from "./../../organisms/CardList";

const Catalog = () => {
  return (
    <main className={styles.catalogPage}>
      <main>
        <CardList />
      </main>
    </main>
  );
};

export default Catalog;
