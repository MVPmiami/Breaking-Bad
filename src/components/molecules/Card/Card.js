import styles from "./card.module.scss";

const Card = () => {
  return (
    <div>
      <div className={styles.cardWrapper}>
        <div className={styles.avatar}></div>
        <div className={styles.personContent}>
          <div className={styles.status}>живой</div>
          <div className={styles.name}>Андрей Панасюк</div>
          <div className={styles.data}>23.11.2001</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
