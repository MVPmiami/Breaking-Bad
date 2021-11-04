import styles from "./style.module.scss";
import { Link } from "react-router-dom";
import FullCard from "../../organisms/FullCard";
import Header from "../../molecules/Header/component";

const Person = ({ cleanData }) => {
  return (
    <div className={styles.currentPage}>
      <Header />
      <div>
        <Link to={"/catalog"} className={styles.linkToCatalog}>
          <div className={styles.arrowBack} onClick={cleanData()}></div>
          <p>Back to Catalog</p>
        </Link>
        <FullCard />
      </div>
    </div>
  );
};

export default Person;