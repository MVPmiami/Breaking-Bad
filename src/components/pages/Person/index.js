import styles from "./style.module.scss";
import { Link } from "react-router-dom";
import FullCard from "../../organisms/FullCard";

const Person = () => {
  return (
    <div className={styles.currentPage}>
      <Link to={"/catalog"} className={styles.linkToCatalog}>
        <div className={styles.arrowBack}></div>
        <p>Back to Catalog</p>
      </Link>
      <FullCard />
    </div>
  );
};

export default Person;
