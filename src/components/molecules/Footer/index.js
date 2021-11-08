import styles from "./style.module.scss";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <span className={styles.year}>2021</span>
      <a href="https://github.com/MVPmiami" className={styles.developer}>
        @MVPmiami
      </a>
    </div>
  );
};

export default Footer;
