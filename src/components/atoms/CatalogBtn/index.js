import styles from "./style.module.scss";

const CatalogBtn = ({isActiveBtn}) => {
  return (
    <div className={`${styles.btnWrapper} ${isActiveBtn ? styles.active : styles.disable}`}>
      <div className={styles.burger}>
        <span></span>
      </div>
      <div className={styles.text}>Catalog</div>
    </div>
  );
};

export default CatalogBtn;
