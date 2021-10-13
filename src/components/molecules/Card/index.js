import styles from "./style.module.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";
import avatar from "./../../../assets/img/walter.png";

const Card = () => {
  return (
    <div>
      <div className={styles.cardWrapper}>
        <LazyLoadImage className={styles.avatar} src={avatar}></LazyLoadImage>
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
