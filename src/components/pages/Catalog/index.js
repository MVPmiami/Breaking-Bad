import styles from "./style.module.scss";
import CardList from "./../../organisms/CardList";
import Header from "./../../organisms/Header";
import Footer from "../../molecules/Footer";

const Catalog = () => {
  return (
    <div className={styles.catalogPage}>
      <Header />
      <CardList />
      <Footer />
    </div>
  );
};

export default Catalog;
