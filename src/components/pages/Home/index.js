import styles from "./style.module.scss";
import Header from "./../../organisms/Header";
import Footer from "../../molecules/Footer";

const Home = () => {
  return (
    <div className={styles.homePage}>
      <Header />
      <Footer />
    </div>
  );
};

export default Home;
