import React from "react";
import styles from "./style.module.scss";
import CatalogBtn from "./../../atoms/CatalogBtn";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";

const Header = () => {
  let location = useLocation().pathname;
  let isActiveBtn = false;
  if (location === "/catalog") {
    isActiveBtn = true;
  } else {
    isActiveBtn = false;
  }

  return (
    <header className={styles.headerWrapper}>
      <Link to={"/"} className={styles.linkToCatalog}>
        <div className={styles.logo}></div>
      </Link>
      <Link to={"/catalog"} className={styles.linkToCatalog}>
        <CatalogBtn isActiveBtn={isActiveBtn} />
      </Link>
    </header>
  );
};

export default Header;
