import styles from "./style.module.scss";
import CatalogBtn from "./../../atoms/CatalogBtn";
import { Link } from "react-router-dom";

const Header = ({ isActiveBtn }) => {
  console.log(isActiveBtn);
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
