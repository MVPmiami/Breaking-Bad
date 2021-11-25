import React from "react";
import styles from "./style.module.scss";

const Footer = () => {
  return (
    <footer>
      <span className={styles.year}>{new Date().getFullYear()}</span>
      <a href="https://github.com/MVPmiami" className={styles.developer}>
        @MVPmiami
      </a>
    </footer>
  );
};

export default Footer;
