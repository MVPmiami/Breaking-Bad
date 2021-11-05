import styles from "./style.module.scss";
import CardList from "./../../organisms/CardList";
import Header from "./../../organisms/Header";

const Catalog = () => {
  return (
    <div className={styles.catalogPage}>
      <Header />
      <CardList />
    </div>
  );
};

export default Catalog;
