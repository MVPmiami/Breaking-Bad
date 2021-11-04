import styles from "./style.module.scss";
import Header from "./../../molecules/Header";

const Home = () => {
  return (
    <div className={styles.homePage}>
      <Header />
    </div>
  );
};

export default Home;
