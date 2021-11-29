import React from "react";
import styles from "./style.module.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";
import img from "./../../../assets/img/mainPicture.webp";

const Home = () => {
  return (
    <div className={styles.homePage} data-test-home-page="home-page">
      <main>
        <LazyLoadImage src={img} className={styles.img}></LazyLoadImage>
      </main>
    </div>
  );
};

export default Home;
